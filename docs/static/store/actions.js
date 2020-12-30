var i=Object.assign;import{degToRad as p,rotatePoint as d,throttle as l}from"../utils/index.js";import{clone as c}from"../utils/store/index.js";import P from"./state.js";export default{setImageData(t,a){t.commit("setImageData",a)},saveSnapshot:l(t=>{t.commit("saveSnapshot",c(t.state.editParams)),t.commit("historyState")}),setEditParam(t,{name:a,value:o}){t.commit("setEditParam",{name:a,value:o}),t.commit("setCropParams")},resetEditParams(t){const a=c(P.editParams);t.commit("setEditParams",a),t.commit("saveSnapshot",c(a)),t.commit("historyState"),t.emit("updateui")},undo(t){const a=t.state.history;a.canUndo&&(t.commit("undo"),t.commit("historyState"))},redo(t){const a=t.state.history;a.canRedo&&(t.commit("redo"),t.commit("historyState"))},cropSetAdjusting(t,a){t.commit("setUIParams",i(i({},t.state.ui),{cropAdjusting:a}))},cropTranslateBy(t,{x:a,y:o}){const s=t.state.editParams.crop;[a,o]=d(p(-(s.angle+s.rotate)),[a,o]);const m=s.translate[0]+a,e=s.translate[1]+o;t.commit("setCropParams",{translate:[m,e]})},cropScaleBy(t,a){const o=t.state.editParams.crop.scale,[s,m]=t.state.editParams.crop.translate,e=a*o+o,r=s/o*e,n=m/o*e;t.commit("setCropParams",{scale:e,translate:[r,n]})},cropSetAngle(t,a){t.commit("setCropParams",{angle:a})},cropSetScale(t,a){t.commit("setCropParams",{scale:a})},cropSetFlip(t,a){t.commit("setCropParams",{flip:a})}};
