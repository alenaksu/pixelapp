import { iteratePixels } from '../utils';

type RGBAColor = [number, number, number, number];

function getLevelIndex(color: RGBAColor, level: number) {
    level = 7 - level;
    return (
        (((color[0] >> level) & 1) << 2) |
        (((color[1] >> level) & 1) << 1) |
        ((color[2] >> level) & 1)
    );
}

class Octree {
    static MAX_DEPTH = 8;

    root: OctreeNode;
    levels: Array<Array<OctreeNode>> = [];
    leaves: Set<OctreeNode> = new Set();

    constructor(public colorCount: number) {
        this.levels = Array.from({ length: Octree.MAX_DEPTH }, () => []);

        this.root = new OctreeNode(0, this);
    }

    addColor(color: RGBAColor) {
        this.root.addColor(color);
    }

    addLevelNode(node: OctreeNode, level: number) {
        this.levels[level].push(node);
    }

    getPalette() {
        const { colorCount, levels, leaves } = this;

        for (let i = Octree.MAX_DEPTH - 2; i >= 0; i--) {
            const nodes = [...levels[i]].sort((a,b) => a.getPixelCount() - b.getPixelCount());
            for (const node of nodes) {
                node.mergeLeaves();

                if (leaves.size <= colorCount) break;
            }

            if (leaves.size <= colorCount) break;

            levels[i].length = 0;
        }

        return [...leaves].map(node => node.getColor());
    }
}

class OctreeNode {
    color: RGBAColor = [0, 0, 0, 0];
    pixelCount: number = 0;
    nodes: Array<OctreeNode> = [];

    constructor(public level: number, public tree: Octree, public parent: OctreeNode = null) {
        tree.addLevelNode(this, level);
    }

    get isLeaf() {
        return this.pixelCount > 0;
    }

    get leafNodes() {
        if (this.isLeaf) return [this];

        const leaves = [];
        for (const node of this.nodes) {
            if (node) {
                leaves.push(...node.leafNodes);
            }
        }

        return leaves;
    }

    getPixelCount() {
        if (this.isLeaf) return this.pixelCount;

        return this.nodes.reduce((sum, node) => node.getPixelCount() + sum, 0);
    }

    mergeLeaves() {
        const { nodes, tree } = this;

        if (!this.isLeaf) {
            this.nodes = [];
            for (const node of nodes) {
                if (node) {
                    this.sumColor(node.color, node.pixelCount);
                    node.pixelCount = 0;
                    tree.leaves.delete(node);
                }
            }
        }
        tree.leaves.add(this);
    }

    sumColor(color: RGBAColor, pixelcount: number = 1) {
        this.color[0] += color[0];
        this.color[1] += color[1];
        this.color[2] += color[2];
        this.color[3] += color[3];

        this.pixelCount += pixelcount;
    }

    addColor(color: RGBAColor) {
        const { nodes, level, tree } = this;

        if (level === Octree.MAX_DEPTH - 1) {
            this.sumColor(color);
            tree.leaves.add(this);
        } else {
            const index = getLevelIndex(color, level + 1);

            if (!nodes[index]) {
                const node = new OctreeNode(level + 1, tree);
                nodes[index] = node;
            }

            nodes[index].addColor(color);
        }
    }

    getColor() {
        return this.color.map((n) => Math.round(n / this.pixelCount));
    }

    removeNode(node: OctreeNode) {
        const index = this.nodes.indexOf(node);
        if (~index) this.nodes.splice(index, 1);
    }
}

export default function quantize(image: ImageData, colors: number) {
    const octree = new Octree(colors);

    for (const [rgba] of iteratePixels(image)) octree.addColor(rgba);

    return octree.getPalette();
}
