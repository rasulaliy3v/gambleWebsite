(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{594:function(e,n,r){"use strict";r.r(n);var t={middleware:function(e){e.store;var n=e.redirect,r=e.$axios,t=(e.$auth,e.route);try{return r.get("/api/v1/user/confirmation?token="+t.params.token),n("/profile")}catch(e){}return n("/")}},o=r(10),component=Object(o.a)(t,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);