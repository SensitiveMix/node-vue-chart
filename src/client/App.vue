<template>
    <div id="app">{{title}}</div>
</template>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#app {
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	font-family: monospace;
	text-transform: uppercase;
	letter-spacing: 2px;
}
#app::before {
	display: block;
	content: '';
	width: 100px;
	height: 100px;
	background: url('https://vuejs.org/images/logo.png') center center no-repeat;
	background-size: cover;
	position: absolute;
	margin-top: -80px;
}
#tickerChart,#orderBookChart{
    width:100%;
    height:400px;
}

</style>
