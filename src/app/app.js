import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// var tmp = true;
// setTimeout(function() {
// 	tmp = false;
// 	app = tmp ? <Main /> : (
// 	<div>
// 		123
// 	</div>
// );
// // Render the main app react component into the app div.
// // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// render(app, document.getElementById('app'));
// }, 2000);
// var app = tmp ? <Main /> : (
// 	<div>
// 		123
// 	</div>
// );
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Main />, document.getElementById('app'));