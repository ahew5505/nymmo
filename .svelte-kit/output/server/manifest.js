export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.vsg_GMKO.js",app:"_app/immutable/entry/app.FMnLTcxQ.js",imports:["_app/immutable/entry/start.vsg_GMKO.js","_app/immutable/chunks/CCOHg9ym.js","_app/immutable/chunks/BHTcr0Q9.js","_app/immutable/chunks/CcOBUsW9.js","_app/immutable/entry/app.FMnLTcxQ.js","_app/immutable/chunks/BzA8uYXD.js","_app/immutable/chunks/CCOHg9ym.js","_app/immutable/chunks/a1RGCRoI.js","_app/immutable/chunks/BnUhaChp.js","_app/immutable/chunks/b5uS8Edj.js","_app/immutable/chunks/CcOBUsW9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
