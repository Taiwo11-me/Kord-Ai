const a0_0x4c41c3=a0_0x1274;(function(_0x49ddf6,_0x4d4e84){const _0x157992=a0_0x1274,_0x1855cd=_0x49ddf6();while(!![]){try{const _0x3a889c=parseInt(_0x157992(0x1b7))/0x1+-parseInt(_0x157992(0x198))/0x2*(-parseInt(_0x157992(0x1dd))/0x3)+parseInt(_0x157992(0x1a2))/0x4*(-parseInt(_0x157992(0x19b))/0x5)+-parseInt(_0x157992(0x1a8))/0x6*(-parseInt(_0x157992(0x19c))/0x7)+parseInt(_0x157992(0x1c3))/0x8*(parseInt(_0x157992(0x197))/0x9)+-parseInt(_0x157992(0x1bb))/0xa*(parseInt(_0x157992(0x1af))/0xb)+parseInt(_0x157992(0x1aa))/0xc*(-parseInt(_0x157992(0x1d6))/0xd);if(_0x3a889c===_0x4d4e84)break;else _0x1855cd['push'](_0x1855cd['shift']());}catch(_0x1b0c98){_0x1855cd['push'](_0x1855cd['shift']());}}}(a0_0x1423,0x9fa58));const fetch=require(a0_0x4c41c3(0x1d3)),yts=require('yt-search'),fs=require('fs'),path=require('path'),{logger}=require('../../Plugin/kordlogger'),settings=require(a0_0x4c41c3(0x1d4)),emojis={'search':'🔍','found':'🎉','noResults':'😕','error':'🤖','processing':'⏳','done':'🚀','warning':'⚠️'};function a0_0x1274(_0x4021be,_0x1c7d3a){const _0x142343=a0_0x1423();return a0_0x1274=function(_0x127418,_0x13a643){_0x127418=_0x127418-0x196;let _0x50332f=_0x142343[_0x127418];return _0x50332f;},a0_0x1274(_0x4021be,_0x1c7d3a);}function a0_0x1423(){const _0x35acc5=['react','buffer','📄\x20*KORD-AI\x20AUDIO-DOWNLOADER*\x20📄\x0a\x0a┌───────────────────\x0a├\x20\x20ℹ️\x20*Title:*\x20','4QpnAXk','sendImage','mp3doc','name','Initial\x20search\x20error:','\x20MB).','6eIrClQ','done','984eAXpQk','songdoc','audiodoc','\x0a├\x20\x20🕘\x20*Duration:*\x20','😕\x20Oops!\x20No\x20videos\x20found\x20for\x20that\x20query.','187XXtZEU','warning','.mp3','key','message','\x20The\x20file\x20size\x20(','length','\x0a├\x20\x20⚠️\x20Fetching..\x0a└───────────────────','1029829pEmHOD','noResults','\x20failed:','sendMessage','271830wDERwY','🌐\x20Network\x20issue\x20after\x20multiple\x20attempts.\x20Please\x20check\x20your\x20connection.','🤖\x20Failed\x20to\x20download\x20after\x20multiple\x20attempts.\x20Please\x20try\x20again\x20later.','\x0a├\x20\x20📆\x20*Published:*\x20','reply','\x0a├.\x20🔗\x20*Link:*\x20','ago','🔍\x20Please\x20provide\x20a\x20search\x20query\x20or\x20YouTube\x20link.','376xYVMtp','url','toFixed','MAX_DOWNLOAD_SIZE','32kbps','Download','status','processing','error','remoteJid','downloadUrl','reduce','64kbps','network','BK9','videos','node-fetch','../../../Config','found','316446kwCHBC','timestamp','\x0a├\x20\x20👤\x20*Channel:*\x20','author','No\x20download\x20URL\x20found','128kbps','json','2981694ZXsqTJ','quality','title','153189zhhRDo','2qlvYBR','404','192kbps','5072140fOHXZS','9119467seZZtA','includes','audio/mpeg'];a0_0x1423=function(){return _0x35acc5;};return a0_0x1423();}module['exports']={'usage':[a0_0x4c41c3(0x1ac),a0_0x4c41c3(0x1ab),'playdoc',a0_0x4c41c3(0x1a4)],'desc':'Search\x20for\x20YouTube\x20videos\x20and\x20download\x20their\x20audio\x20as\x20a\x20document.','commandType':a0_0x4c41c3(0x1c8),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'📄',async 'execute'(_0x16a22d,_0x2aa4cc,_0x2f5aa6){const _0x49f3c7=a0_0x4c41c3,_0x4767c9=0x3;let _0x28225a=0x0;try{const _0x5f3c3b=_0x2f5aa6['join']('\x20');await kord[_0x49f3c7(0x19f)](_0x2aa4cc,emojis['search']);if(!_0x5f3c3b)return await kord[_0x49f3c7(0x1bf)](_0x2aa4cc,_0x49f3c7(0x1c2));const _0xd8b181=await yts(_0x5f3c3b);if(_0xd8b181[_0x49f3c7(0x1d2)]['length']===0x0)return await kord['react'](_0x2aa4cc,emojis[_0x49f3c7(0x1b8)]),await kord[_0x49f3c7(0x1bf)](_0x2aa4cc,_0x49f3c7(0x1ae));const _0x1b70ce=_0xd8b181[_0x49f3c7(0x1d2)][0x0];console['log'](_0x1b70ce),await kord[_0x49f3c7(0x19f)](_0x2aa4cc,emojis[_0x49f3c7(0x1d5)]);const _0x2efa1a=await fetch(_0x1b70ce['thumbnail']),_0x4d9c58=await _0x2efa1a[_0x49f3c7(0x1a0)](),_0x1dfc9f=_0x49f3c7(0x1a1)+_0x1b70ce[_0x49f3c7(0x196)]+_0x49f3c7(0x1d8)+_0x1b70ce[_0x49f3c7(0x1d9)][_0x49f3c7(0x1a5)]+_0x49f3c7(0x1be)+_0x1b70ce[_0x49f3c7(0x1c1)]+_0x49f3c7(0x1ad)+_0x1b70ce[_0x49f3c7(0x1d7)]+_0x49f3c7(0x1c0)+_0x1b70ce['url']+_0x49f3c7(0x1b6);await kord[_0x49f3c7(0x1a3)](_0x2aa4cc,_0x4d9c58,_0x1dfc9f);const _0x3cc32=async()=>{const _0xfdb1e9=_0x49f3c7;try{const _0x1fb1a9=settings[_0xfdb1e9(0x1c6)]*0x400*0x400,_0x2c093f='https://bk9.fun/download/ytmp3?url='+encodeURIComponent(_0x1b70ce[_0xfdb1e9(0x1c4)]),_0xddbf93=await fetch(_0x2c093f),_0x29178b=await _0xddbf93[_0xfdb1e9(0x1dc)]();if(!_0x29178b[_0xfdb1e9(0x1c9)])throw new Error('Download\x20failed');const _0x543427=[_0xfdb1e9(0x19a),_0xfdb1e9(0x1db),_0xfdb1e9(0x1cf),_0xfdb1e9(0x1c7)],_0x3e6d37=_0x543427[_0xfdb1e9(0x1ce)]((_0x2ede96,_0x3e760a)=>_0x2ede96||_0x29178b[_0xfdb1e9(0x1d1)][_0xfdb1e9(0x1cd)]['find'](_0x2731c3=>_0x2731c3[_0xfdb1e9(0x1de)]===_0x3e760a),null);if(!_0x3e6d37)throw new Error(_0xfdb1e9(0x1da));const _0x101317=await fetch(_0x3e6d37[_0xfdb1e9(0x1cd)]),_0xbd2fcb=await _0x101317[_0xfdb1e9(0x1a0)](),_0x446525=_0xbd2fcb[_0xfdb1e9(0x1b5)];if(_0x446525>_0x1fb1a9)return await kord[_0xfdb1e9(0x19f)](_0x2aa4cc,emojis[_0xfdb1e9(0x1b0)]),await kord[_0xfdb1e9(0x1bf)](_0x2aa4cc,emojis['warning']+_0xfdb1e9(0x1b4)+(_0x446525/0x400/0x400)[_0xfdb1e9(0x1c5)](0x2)+'\x20MB)\x20exceeds\x20the\x20maximum\x20allowed\x20size\x20('+settings['MAX_DOWNLOAD_SIZE']+_0xfdb1e9(0x1a7));await _0x16a22d[_0xfdb1e9(0x1ba)](_0x2aa4cc[_0xfdb1e9(0x1b2)][_0xfdb1e9(0x1cc)],{'document':_0xbd2fcb,'mimetype':_0xfdb1e9(0x19e),'fileName':_0x3e6d37[_0xfdb1e9(0x196)]+_0xfdb1e9(0x1b1)}),await kord['react'](_0x2aa4cc,emojis[_0xfdb1e9(0x1a9)]);}catch(_0x4ec954){_0x28225a++,console[_0xfdb1e9(0x1cb)]('Attempt\x20'+_0x28225a+_0xfdb1e9(0x1b9),_0x4ec954);if(_0x28225a<_0x4767c9)return await kord['react'](_0x2aa4cc,emojis[_0xfdb1e9(0x1ca)]),await _0x3cc32();else{await kord[_0xfdb1e9(0x19f)](_0x2aa4cc,emojis[_0xfdb1e9(0x1cb)]);if(_0x4ec954[_0xfdb1e9(0x1b3)][_0xfdb1e9(0x19d)](_0xfdb1e9(0x1d0)))await kord[_0xfdb1e9(0x1bf)](_0x2aa4cc,_0xfdb1e9(0x1bc));else _0x4ec954['message']['includes'](_0xfdb1e9(0x199))?await kord[_0xfdb1e9(0x1bf)](_0x2aa4cc,'🚫\x20Audio\x20not\x20available.\x20Please\x20try\x20another\x20video.'):await kord['reply'](_0x2aa4cc,_0xfdb1e9(0x1bd));}}};await _0x3cc32();}catch(_0x25d420){console[_0x49f3c7(0x1cb)](_0x49f3c7(0x1a6),_0x25d420),await kord[_0x49f3c7(0x19f)](_0x2aa4cc,emojis[_0x49f3c7(0x1cb)]),await kord['reply'](_0x2aa4cc,''+_0x25d420);}}};