var _mw=300;var _mh=400;var _mgr='widget_white.swf';
if(_mcq[0]=='' || _mcq[0]=='undefined' || _mcq[0]==null)_mcq[0]=1;
if(_mcq[0]==1){_mgr='widget_white.swf';}else if(_mcq[0]==2){_mgr='widget_black.swf';}else if(_mcq[0]==3){_mgr='widget_black_white.swf';}
else if(_mcq[0]==4){_mgr='widget_black_white_big.swf';}
else if(_mcq[0]==5){_mw=295;_mh=335;_mgr='widget_black_White_small.swf';}
else if(_mcq[0]==6){_mw=294;_mh=364;_mgr='widget_indices.swf';}
else if(_mcq[0]==7){_mw=728;_mh=90;_mgr='widget_lb1.swf';}
else if(_mcq[0]==8){_mw=728;_mh=90;_mgr='widget_lb2.swf';}
else if(_mcq[0]==9){_mw=728;_mh=90;_mgr='widget_lb3.swf';}

var _ms_g = '<object width="'+_mw+'" height="'+_mh+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param value="sid='+_mcq[1]+'" name="flashvars"><param value="http://img1.moneycontrol.com/flash/mcwidget/'+_mgr+'" name="src"><param value="transparent" name="wmode"><param value="high" name="quality"><embed width="'+_mw+'" height="'+_mh+'" type="application/x-shockwave-flash" flashvars="sid='+_mcq[1]+'" src="http://img1.moneycontrol.com/flash/mcwidget/'+_mgr+'" wmode="transparent" allowfullscreen="true" quality="high"></object>';
document.getElementById("_mc_mg"+_mcq[0]).innerHTML=_ms_g;

/*
<script type="text/javascript">var _mcq=["6",""];</script>
		<span id='_mc_mg6'></span><script language="JavaScript" src="js/myjs.js">
		*/