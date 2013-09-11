$ = jQuery;

eval(function(h, b, i, d, g, f) {
	g = function(a) {
		return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
	};
	if (!"".replace(/^/, String)) {
		while (i--) {
			f[g(i)] = d[i] || g(i)
		}
		d = [function(a) {
			return f[a]
		}];
		g = function() {
			return "\\w+"
		};
		i = 1
	}
	while (i--) {
		if (d[i]) {
			h = h.replace(new RegExp("\\b" + g(i) + "\\b", "g"), d[i])
		}
	}
	return h
}(";(I($,A,B,C){G D=(I(u){Q I(){Q u.7b(7a[0])}})((1B&&1B.3U)?1B.3U.3i():\"\");G E=N;F(D(\"6Z\")>-1){F(D(\"6X\")>-1||D(\"6W\")>-1||D(\"6V\")>-1){E=M}};F(D(\"6T\")>-1){F(D(\"6R\")>-1&&D(\"6P\")>-1){E=M}};F(D(\"6L\")>-1){E=M};F(D(\"6J 6D 6B 7\")>-1){E=M};$.1i($.1H,{2y:I(x,t,b,c,d,s){F(s===C)s=1;Q c*((t=t/d-1)*t*((s+1)*t+s)+1)+b}});F(4t $.1x.35===\"3B\"){$.1x.35=I(a,b,c){2X(9.6z).6x(a,9.38,b,c);Q 9}}$.1i({25:{4a:{19:'2G-12',1u:{2B:6v,J:6u,H:6t},1V:N,1y:{1o:0.6},1q:{Y:{1e:3x,1H:\"2y\"},1m:{1e:6s,1H:\"2y\"},R:{1e:6r,1H:\"2y\"},3z:{1e:2v,1H:\"2y\",4s:10,4y:2}},1E:{J:4D,H:4N},1b:{J:4D,H:4N},2x:{J:-1,H:-1},3P:M,2C:\"1s\",1z:{1h:\"6p\",6m:N,6l:\"15\"}},K:{},2d:{},2m:{},16:{},S:{12:[],P:{1m:[],2L:[],1l:[],2H:[]},1p:[],16:[],1G:[],15:[]},1g:N,1f:N,2o:\"16\",4I:{2u:{1c:/[^\\.]\\.(2u)\\s*$/i},3J:{1c:/3J\\.3O\\//i,X:'/',18:3,1b:1,17:\"1k://1I.2U.11/22/%1a%?1U=1&V;4f=1&V;1L=0&V;4h=1\"},2U:{1c:/2U\\.11\\/4j/i,X:'=',18:1,1b:1,17:\"1k://1I.2U.11/22/%1a%?1U=1&V;4f=1&V;1L=0&V;4h=1\"},3v:{1c:/3v\\.11/i,X:'/',18:3,1b:1,17:\"1k://3u.3v.11/1X/%1a%?6h=1&V;1U=1&V;63=1&V;62=1&V;60=0&V;4u=&V;4x=1\"},3s:{1c:/3s\\.11\\/4j/i,X:'/',18:4,17:\"1k://1I.3s.11/5Z/%1a%/.2u?5Y=4E=5X\"},3q:{1c:/3q\\.11\\/1X/i,X:'/',18:4,1b:M,17:\"1k://1I.3q.11/22/1X/%1a%?4E=1&5W=5S\"},5L:{1c:/2E\\.11\\/1X\\//i,X:'1X/',18:1,1b:M,17:\"1k://1I.2E.11/e/%1a%\"},2E:{1c:/2E\\.11\\/1X:/i,X:'1X:',18:1,17:\"1k://1I.2E.11/3C/3C.2u?1U=M&V;4x=1&V;5K=%1a%\"},3p:{1c:/3p\\.3F/i,X:'/',18:4,17:\"1k://1I.3p.3F/1E/1X/%1a%?5J=%2F&V;1U=M&V;5I=%1a%&V;5H=M&V;5G=0.5F&V;5E=0.5D&V;5C=5B\"},3n:{1c:/3n\\.11/i,X:'/',18:3,17:\"1k://1I.3n.11/3u/%1a%\"},3T:{1c:/v\\.3T\\.11/i,X:'/',18:3,17:\"1k://5A.5s.11/3u.2u?5p=%1a%&V;v=1.5o\"},3l:{1c:/3l\\.11\\/5m/i,X:'/',18:4,17:\"1k://5l.3l.11/%1a%.5k?1U=M&V;26=28\"}},4b:{3A:{1c:/3A\\.11\\/1A/i,X:'?',18:1,17:\"1k://1I.3A.11/1A/22/?5j=5h-5g-5f-5d-5c&V;w=%J%&V;h=%H%&V;%1a%\"},5b:{1c:/1A\\.2c\\.3e(m|.3d)(.*)5a=c/i,X:'?',18:1,17:\"1k://1A.2c.11/?3b=59&V;%1a%\"},58:{1c:/1A\\.2c\\.3e(m|.3d)\\/1A\\/4B/i,X:'?',18:1,17:\"1k://1A.2c.11/1A/4B?3b=22&V;%1a%\"},2c:{1c:/1A\\.2c\\.3e(m|.3d)/i,X:'?',18:1,17:\"1k://1A.2c.11/1A?%1a%&V;3b=22\"}},31:/\\.(?:57|56|55|54|53|52)/i,1y:{2S:I(a){9.K=a;9.U=$('<L 1a=\"'+2g 4O().4Q()+'\" Z=\"'+9.K.19+'-1y\"></L>');9.U.W($.1i({},{'2Y':'51','1s':0,'1j':0,'1o':0,'1P':'28','z-18':9.K.2B},9.K.1u));9.U.1t(\"1S\",$.T(I(e){F(!9.K.1V&&!9.2n){F($.1W(9.K.1F)){9.K.1F()}O{9.1w()}}e.2p()},9));9.2n=M;9.3R();Q 9},3R:I(){9.4q=$(B.3S);9.4q.24(9.U)},1D:I(x,y){9.U.W({'H':0,'J':0});F(9.1M){9.1M.W({'H':0,'J':0})};G a={x:$(B).J(),y:$(B).H()};9.U.W({'J':'2v%','H':y||a.y});F(9.1M){9.1M.W({'H':0,'J':0});9.1M.W({'2Y':'3X','1j':0,'1s':0,'J':9.U.J(),'H':y||a.y})}Q 9},Y:I(a){F(!9.2n){Q 9};F(9.2a){9.2a.1K()};F(9.1M){9.1M.W('1P','33')};9.U.W({'1P':'33','1o':0});9.1D();9.2n=N;9.2a=9.U.42(9.K.43,9.K.1u.1o,$.T(I(){F(9.K.1u.1o){9.U.W(9.K.1u)};9.U.32('Y');F($.1W(a)){a()}},9));Q 9},1w:I(a){F(9.2n){Q 9};F(9.2a){9.2a.1K()};F(9.1M){9.1M.W('1P','28')};9.2n=M;9.2a=9.U.42(9.K.45,0,$.T(I(){9.U.32('1w');F($.1W(a)){a()};9.U.W({'H':0,'J':0,'1P':'28'})},9));Q 9}},2S:I(a){9.K=$.1i(M,9.4a,a);G b=9.K.19;G c=$('<L Z=\"'+b+' '+b+'-2o-16\"><L Z=\"'+b+'-26-1s-1j\"></L><L Z=\"'+b+'-26-1s-46\"></L><L Z=\"'+b+'-26-1s-2s\"></L><a Z=\"'+b+'-1d-1m\" 13=\"#1m\"><1v>4Z</1v></a><L Z=\"'+b+'-1B\"><a Z=\"'+b+'-1d-1j\" 13=\"#\"><1v>4c</1v></a><a Z=\"'+b+'-1d-2s\" 13=\"#\"><1v>4d</1v></a></L><L Z=\"'+b+'-P\"><L Z=\"'+b+'-P-4Y\"></L><a Z=\"'+b+'-1d-1j\" 13=\"#\"><1v>4c</1v></a><a Z=\"'+b+'-1d-1l\" 13=\"#\"><1v>4X</1v></a><L Z=\"'+b+'-P-1N\"></L><a Z=\"'+b+'-1d-2s\" 13=\"#\"><1v>4d</1v></a><L Z=\"'+b+'-P-36\"></L></L><L Z=\"'+b+'-1p\"></L><L Z=\"'+b+'-15\"></L><L Z=\"'+b+'-26-2T-1j\"></L><L Z=\"'+b+'-26-2T-46\"></L><L Z=\"'+b+'-26-2T-2s\"></L></L>');G e=9.S;9.1y.2S({19:b,1u:9.K.1y,1V:9.K.1V,2B:9.K.1u.2B-1,1F:9.T(9.1m),43:(E?9.K.1q.Y.1e/2:9.K.1q.Y.1e),45:(E?9.K.1q.1m.1e/2:9.K.1q.1m.1e)});e.12=c;e.1B=$('.'+b+'-1B',c);e.P.L=$('.'+b+'-P',c);e.P.1m=$('.'+b+'-1d-1m',c);e.P.2L=$('.'+b+'-1d-1j',c);e.P.1l=$('.'+b+'-1d-1l',c);e.P.2H=$('.'+b+'-1d-2s',c);e.P.1N=$('.'+b+'-P-1N',c);e.1p=$('.'+b+'-1p',c);e.15=$('.'+b+'-15',c);e.R=$('<L Z=\"'+b+'-R\"></L>').W({'2Y':'3X','z-18':9.K.1u.2B,'1s':-4W}).24(c);$('3S').24(e.R);9.1n=$(A);9.4k();Q c},4k:I(){G a=9.1n;a[0].4V=I(){F(9.1g){9.1y.1D();F(9.R&&!9.1f){9.1Z()}}};a.1t('1D',9.T(I(){F(9.1g&&!E){9.1y.1D();F(9.R&&!9.1f){9.1Z()}}}));a.1t('4U',9.T(I(){F(9.1g&&9.R&&!9.1f&&!E){9.1Z()}}));$(B).1t('4T',9.T(I(e){F(9.1g){F(e.3f===27&&9.K.1V===N){9.1m()}F(9.2m.4r>1){F(e.3f===37){9.S.P.2L.2Q('1S',e)}F(e.3f===39){9.S.P.2H.2Q('1S',e)}}}}));9.S.P.1m.1t('1S 2N',{\"1x\":\"1m\"},9.T(9.1x));9.S.P.1l.1t('1S 2N',{\"1x\":\"4w\"},9.T(9.1x));9.1y.U.1t('Y',9.T(I(){$(9).2Q('Y')}));9.1y.U.1t('1w',9.T(I(){$(9).2Q('1m')}))},1x:I(e){9[e.2i.1x].2I(9);e.2p()},T:I(a){Q $.T(a,9)},4z:I(f,g,h){G j={1h:\"\",J:\"\",H:\"\",13:\"\"};$.1T(f,9.T(I(c,d){$.1T(d,9.T(I(i,e){F((c==\"1E\"&&g.X('?')[0].1R(e.1c))||(c==\"1b\"&&g.1R(e.1c))){j.13=g;F(e.X){G a=c==\"1E\"?g.X(e.X)[e.18].X('?')[0].X('&')[0]:g.X(e.X)[e.18];j.13=e.17.3r(\"%1a%\",a).3r(\"%J%\",h.J).3r(\"%H%\",h.H)}j.1h=e.1b?\"1b\":c;F(h.J){j.J=h.J;j.H=h.H}O{G b=9.2K(9.K[j.1h].J,9.K[j.1h].H);j.J=b.J;j.H=b.H}Q N}}));F(!!j.1h)Q N}));Q j},4G:I(a,b){G c=9;G d=c.S.P.2L;G f=c.S.P.2H;c.2m.4r=a.1O;F(a.1O>1){d.2q('.12');f.2q('.12');d.1t('1S.12 2N.12',I(e){e.2p();a.4J(a.69());c.Y(a)});f.1t('1S.12 2N.12',I(e){e.2p();a.3w(a.4S());c.Y(a)});F(c.S.1B.W(\"1P\")===\"28\"){c.S.P.L.Y()}d.Y();f.Y();F(9.K.3P){F(a[1].13.1R(9.31)){(2g 3y()).23=a[1].13}F(a[a.1O-1].13.1R(9.31)){(2g 3y()).23=a[a.1O-1].13}}}O{d.1w();f.1w()}},4P:I(c,d){G f=9.S;f.P.1N.1r();$.1T(c,9.T(I(i,a){G b=$('<a 13=\"#\" Z=\"'+a['Z']+'\">'+a['15']+'</a>');b.1t('1S',9.T(I(e){F($.1W(a.1F)){a.1F(9.S.16.23,9,d)}e.2p()}));f.P.1N.24(b)}));f.P.L.Y()},Y:I(d,f,g){F(9.2l.2r(d)){Q N}G h=d[0];G i='';G j=N;G k=h.13;G l=9.S;G m={x:9.1n.J(),y:9.1n.H()};G n,H;F(d.1O===1&&h.1h===\"U\"){i=\"U\"}9.2f();j=9.1g;9.4n();F(j===N){9.1Z()}9.4G(d,f);f=$.1i(M,{'J':0,'H':0,'1V':0,'3c':'','3a':M,'R':M,'1f':N,'1b':N,'34':'','2V':M,'3j':1,'2D':I(){},'2R':I(){}},f||{},h);9.K.2D=f.2D;9.K.2R=f.2R;9.K.2V=f.2V;G o=9.4F(k);f=$.1i({},f,o);F(f.J&&(\"\"+f.J).29(\"p\")>0){f.J=2P.4A((m.x-20)*f.J.4v(0,f.J.29(\"p\"))/2v)}F(f.H&&(\"\"+f.H).29(\"p\")>0){f.H=2P.4A((m.y-20)*f.H.4v(0,f.H.29(\"p\"))/2v)}9.1y.K.1V=f.1V;G p=l.P.1l;p.21(9.K.19+'-1d-2W');p.21(9.K.19+'-1d-1l');p.2A(9.K.19+'-1w');9.R=!!f.R;9.1f=!!f.1f;F($.5e(f.P)){9.4P(f.P,h.U)}F(l.P.1N.4i(\":1r\")===N){l.P.L.Y()}F(9.2l.2r(f.3c)===N){i=f.3c}O F(f.1b){i='1b'}O F(k.1R(9.31)){i='16'}O{G q=9.4z({\"1E\":9.4I,\"1b\":9.4b},k,f);F(!!q.1h===M){k=q.13;i=q.1h;f.J=q.J;f.H=q.H}F(!!i===N){F(k.1R(/#/)){G r=k.5i(k.29(\"#\"));F($(r).1O>0){i='3h';k=r}O{i='1z'}}O{i='1z'}}}F(i==='16'){l.16=2g 3y();$(l.16).48(9.T(I(){G a=9.S.16;$(a).2q('48');F(9.1g===N){Q N}F(f.J){n=1C(f.J,10);H=1C(f.H,10);f.3a=N}O{a.J=1C(a.J*f.3j,10);a.H=1C(a.H*f.3j,10);F(f.1f){n=a.J;H=a.H}O{G b=9.2K(a.J,a.H);n=b.J;H=b.H}}F(f.3a){F(f.1f||(!f.1f&&a.J!=n&&a.H!=H)){l.P.L.Y();l.P.1l.21(9.K.19+'-1w');l.P.1l.2A(9.K.19+(f.1f?'-1d-2W':'-1d-1l'))}}l.1G=(9.2l.2r(f.1G))?N:$('<L Z=\"'+9.K.19+'-1G\"></L>').15(f.1G);9.3k();9.1D(n,H)}));9.S.16.5n=9.T(I(){9.2j(\"3Y 5q 16 5r 3O 3W. 5t 5u 5v 5w.\")});9.S.16.23=k}O F(i=='1E'||i=='3h'||i=='1z'||i=='U'){F(i=='3h'){G s=$(k);G t=f.5x==\"5y\"?s:s.5z(M).Y();n=f.J>0?f.J:s.3m(M);H=f.H>0?f.H:s.3o(M);9.2k(t,n,H)}O F(i=='1z'){F(f.J){n=f.J;H=f.H}O{9.2j(\"3N 3M 3L 3K 2e 3I. 3H ?12[J]=3G&12[H]=3x 3D 2e 36 4M 2e 17.\");Q N}F(9.2d.1z){9.2d.1z.5M()}9.2d.1z=$.1z($.1i(M,{},9.K.1z,f.1z||{},{17:k,2j:9.T(I(a,b,c){9.2j(\"5N 5O \"+a.5P+\" \"+c+\". 5Q: \"+k)}),5R:9.T(I(a){9.2k($(a),n,H)})}))}O F(i=='1E'){G u=9.4L(k,f.J,f.H,f.34);9.2k($(u),f.J,f.H,'1E')}O F(i==='U'){n=f.J>0?f.J:h.U.3m(M);H=f.H>0?f.H:h.U.3o(M);9.2k(h.U,n,H)}}O F(i=='1b'){F(f.J){n=f.J;H=f.H}O{9.2j(\"3N 3M 3L 3K 2e 3I. 3H ?12[J]=3G&12[H]=3x&5T[1b]=M 3D 2e 36 4M 2e 17.\");Q N}G v='<1b 1a=\"5U'+(2g 4O().4Q())+'\" 5V=\"0\" 23=\"'+k+'\" 1u=\"4K:0; 4H:0;\"></1b>';9.2k($(v).W({J:n,H:H}),n,H)}9.1F=$.1W(g)?g:I(e){}},3k:I(){G a=9.S;G b=a.1p;G c=9.K.19+'-2f';b.1t('1Q',9.T(I(){b.2q('1Q');F(9.1g===N){Q N}9.2O('16');b.1r();a.15.1r();F(a.1G){b.24(a.1G)}b.24(a.16);F(!$.2J.1o){b.21(c)}O{$(a.16).W(\"1p-4u\",\"61(3t, 3t, 3t, 0)\");$(a.16).1K().W(\"1o\",0).2b({\"1o\":1},(E?9.K.1q.Y.1e/2:9.K.1q.Y.1e),I(){b.21(c)})}9.K.2D.2I(9)}))},4L:I(c,d,e,f){G g=$.1i(M,{64:\"65:66-67-68-4R-6a\",J:d,H:e,6b:c,23:c,1u:\"4K:0; 4H:0;\",6c:\"M\",6d:\"6e\",6f:\"6g\",4p:\"M\",1U:\"M\",1h:\"6i/x-6j-1E\",34:\"4p=1&1U=1&6k=1\"},f);G h=\"<2w \";G i=\"<22 \";G j=\"\";$.1T(g,I(a,b){F(b!==\"\"){h+=a+\"=\\\"\"+b+\"\\\" \";i+=a+\"=\\\"\"+b+\"\\\" \";j+=\"<44 19=\\\"\"+a+\"\\\" 6n=\\\"\"+b+\"\\\"></44>\"}});G k=h+\">\"+j+i+\"></22></2w>\";Q k},2k:I(a,b,c,d){G e=9;G f=e.K;G g=e.S;G h=g.1p;e.2O(\"15\");e.1D(b+30,c+20);h.1t('1Q',I(){h.21(f.19+'-2f');g.15.24(a);F(d==\"1E\"&&D(\"6o\")>-1){g.15.15(a)}h.2q('1Q');F(f.2V&&4t 41!=='3B'){41.6q()}f.2D.2I(9)})},1Z:I(w,h){G a={x:$(9.1n).J(),y:$(9.1n).H()};G b={x:$(9.1n).4m(),y:$(9.1n).4g()};G c=9.S;G d=h!=2t?h:c.12.3o();G e=w!=2t?w:c.12.3m();G y=0;G x=0;x=b.x+((a.x-e)/2);F(9.1g){y=b.y+(a.y-d)/2}O F(9.K.2C==\"2T\"){y=(b.y+a.y+14)}O F(9.K.2C==\"1s\"){y=(b.y-d)-14}O F(9.K.2C==\"2s\"){x=a.x;y=b.y+(a.y-d)/2}O F(9.K.2C==\"1j\"){x=-e;y=b.y+(a.y-d)/2}F(9.1g){F(!9.2d.R){9.1J(c.R,{'1j':1C(x,10)},'R')}9.1J(c.R,{'1s':1C(y,10)},'R')}O{c.R.W({'1j':1C(x,10),'1s':1C(y,10)})}},1J:I(d,f,g,h,i){F(2M($.1x.2G)<1.8){G j=$.6w({2h:i||N,1e:(E?9.K.1q[g].1e/2:9.K.1q[g].1e),1H:9.K.1q[g].1H,1Q:($.1W(h)?9.T(h,9):2t)});Q d[j.2h===N?\"1T\":\"2h\"](I(){F(2M($.1x.2G)>1.5){F(j.2h===N){$.6y(9)}}G c=$.1i({},j),3V=9;c.6A=$.1i({},f);c.3Q={};2Z(G p 6C f){19=p;c.3Q[19]=c.4C&&c.4C[19]||c.1H||'6E'}$.1T(f,I(a,b){G e=2g $.6F(3V,c,a);e.1N(e.6G(M)||0,b,\"6H\")});Q M})}O{d.2b(f,{2h:i||N,1e:(E?9.K.1q[g].1e/2:9.K.1q[g].1e),1H:9.K.1q[g].1H,1Q:($.1W(h)?9.T(h,9):2t)})}},1D:I(x,y){G a=9.S;F(9.1g){G b={x:$(9.1n).J(),y:$(9.1n).H()};G c={x:$(9.1n).4m(),y:$(9.1n).4g()};G d=2P.1l((c.x+(b.x-(x+14))/2),0);G e=2P.1l((c.y+(b.y-(y+14))/2),0);9.2d.R=M;9.1J(a.R.1K(),{'1j':(9.1f&&d<0)?0:d,'1s':(9.1f&&(y+14)>b.y)?c.y:e},'R',$.T(I(){9.R=N},9.2d));9.1J(a.15,{'H':y-20},'R');9.1J(a.12.1K(),{'J':(x+14),'H':y-20},'R',{},M);9.1J(a.1B,{'J':x},'R');9.1J(a.1B,{'1s':(y-(a.1B.H()))/2},'R');9.1J(a.1p.1K(),{'J':x,'H':y},'R',I(){$(a.1p).32('1Q')})}O{a.15.W({'H':y-20});a.12.W({'J':x+14,'H':y-20});a.1p.W({'J':x,'H':y});a.1B.W({'J':x})}},1m:I(a){G b=9.S;9.1g=N;9.2m={};9.K.2R();F(!$.2J.1o||E){b.1p.1r();b.15.6I(\"1b\").1Y(\"23\",\"\");F(!$.2J.1o){6K(I(){b.15.1w().1r().Y()},2v)}O F(E){b.15.1w().1r().Y()}b.P.1N.1r();b.R.W(\"1P\",\"28\");9.1Z()}O{b.R.2b({\"1o\":0,\"1s\":\"-=40\"},{2h:N,1Q:(9.T(I(){b.1p.1r();b.15.1r();b.P.1N.1r();9.1Z();b.R.W({\"1P\":\"28\",\"1o\":1,\"3g\":\"1g\"})}))})}9.1y.1w(9.T(I(){F($.1W(9.1F)){9.1F.2I(9,$.6M(a))}}));b.1p.1K(M,N).2q(\"1Q\")},4n:I(){9.1g=M;F(!$.2J.1o){9.S.R.6N(0).1u.6O(\"4o\")}9.S.R.1K().W({1o:1,1P:\"33\",3g:\"1g\"}).Y();9.1y.Y()},3z:I(){G z=9.K.1q.3z;G x=z.4s;G d=z.1e;G t=z.2a;G o=z.4y;G l=9.S.R.2Y().1j;G e=9.S.R;2Z(G i=0;i<o;i++){e.2b({1j:l+x},d,t);e.2b({1j:l-x},d,t)};e.2b({1j:l+x},d,t);e.2b({1j:l},d,t)},2O:I(a){F(a!=9.2o){G b=9.K.19+\"-2o-\";9.S.12.21(b+9.2o).2A(b+a);9.2o=a}9.S.R.W(\"3g\",\"1g\")},2j:I(a){6Q(a);9.1m()},4F:I(d){G e=/12\\[([^\\]]*)?\\]$/i;G f={};F(d.1R(/#/)){d=d.4l(0,d.29(\"#\"))}d=d.4l(d.29('?')+1).X(\"&\");$.1T(d,I(){G a=9.X(\"=\");G b=a[0];G c=a[1];F(b.1R(e)){F(6S(c)){c=2M(c)}O F(c.3i()==\"M\"){c=M}O F(c.3i()==\"N\"){c=N}f[b.1R(e)[1]]=c}});Q f},2K:I(x,y){G a=9.K.2x.J>0?9.K.2x.J:9.1n.J()-50;G b=9.K.2x.H>0?9.K.2x.H:9.1n.H()-50;F(x>a){y=y*(a/x);x=a;F(y>b){x=x*(b/y);y=b}}O F(y>b){x=x*(b/y);y=b;F(x>a){y=y*(a/x);x=a}}Q{J:1C(x,10),H:1C(y,10)}},2f:I(){G a=9.K.1u;G b=9.S;G c=b.1p;9.2O('16');c.6U().1K(M);c.1r();b.15.1r();b.P.L.1w();b.P.L.W(\"J\");c.2A(9.K.19+'-2f');F(9.1g==N){9.1Z(a[\"J\"],a[\"H\"]);9.1D(a[\"J\"],a[\"H\"])}},4w:I(){G a=9;G b=a.S.P;G c=a.S.16;G d=a.K.19;G e={};b.1l.21(d+'-1d-2W '+d+'-1d-1l').2A((a.1f)?d+'-1d-1l':d+'-1d-2W');a.2f();a.3k();b.L.Y();F(a.1f){e=a.2K(c.J,c.H)}O{e=c}a.1D(e.J,e.H);a.1f=!a.1f},2z:I(a){G a=$(a);Q $.1i({},{13:a.1Y(\"13\"),1L:($.47(a.1Y(\"2i-1L\")||a.1Y(\"1L\"))),3Z:a.1Y(\"2i-1L\")?\"2i-1L\":\"1L\",1G:$.47(a.1Y(\"2i-1G\")||a.1Y(\"1G\")),U:a[0]},$.6Y(a.1Y(\"2i-K\")||\"{}\"))},3E:I(b,c){G d=$(c.U);G e=9.2z(d);G f=e.1L;G g=e.3Z;G h=c.K;G j=[];d.70();F(c.2m){j=c.2m}O F(9.2l.2r(f)||f==='71'){j=[e]}O{G k=[];G l=[];G m=N;$(\"a[\"+g+\"], 72[\"+g+\"]\",9.73).4o(\"[\"+g+\"=\\\"\"+f+\"\\\"]\").1T($.T(I(i,a){F(d[0]===a){k.4J(9.2z(a));m=M}O F(m==N){l.3w(9.2z(a))}O{k.3w(9.2z(a))}},9));j=k.74(l)}$.12(j,h,c.1F,d);Q N},2l:{2r:I(a){F(a==2t)Q M;F(75.76.77.78(a)==='[2w 79]'||$.1h(a)===\"4e\")Q a.1O===0}}},12:I(a,b,c){G d=[];F($.25.2l.2r(a)){Q $.25}F($.1h(a)===\"49\"){d=[$.1i({},{13:a},b)]}O F($.1h(a)===\"4e\"){G e=a[0];F($.1h(e)===\"49\"){2Z(G i=0;i<a.1O;i++){d[i]=$.1i({},{13:a[i]},b)}}O F($.1h(e)===\"2w\"){2Z(G i=0;i<a.1O;i++){d[i]=$.1i({},b,a[i])}}}O F($.1h(a)===\"2w\"&&a[0].7c){d=[$.1i({},{1h:\"U\",13:\"#\",U:a},b)]}Q $.25.Y(d,b,c)}});$.1x.12=I(a,b){G c={\"38\":9.38,\"K\":a,\"1F\":b};Q $(9).35('1S',I(e){e.2p();e.7d();Q $.T($.25.3E,$.25)(e,$.1i({},c,{\"U\":9}))})};$(I(){F(2M($.1x.2G)>1.3){$.25.2S()}O{7e\"3Y 2X 7f 7g 7h 3W 4i 7i 7j. 7k 7l 7m 2X 1.4+\";}})})(2X,7n,7o);", 62, 459, "|||||||||this||||||||||||||||||||||||||||||||if|var|height|function|width|options|div|true|false|else|buttons|return|move|esqueleto|proxy|element|amp|css|split|show|class||com|lightbox|href||html|image|url|index|name|id|iframe|reg|button|duration|maximized|visible|type|extend|left|http|max|close|win|opacity|background|animation|empty|top|bind|style|span|hide|fn|overlay|ajax|maps|navigator|parseInt|resize|flash|callback|title|easing|www|morph|stop|rel|shim|custom|length|display|complete|match|click|each|autoplay|modal|isFunction|video|attr|movebox||removeClass|embed|src|append|LightBoxObject|border||none|indexOf|transition|animate|google|animations|the|loading|new|queue|data|error|appendhtml|utils|gallery|hidden|mode|preventDefault|unbind|isEmpty|right|null|swf|100|object|maxsize|easeOutBackMin|getOptions|addClass|zIndex|emergefrom|onOpen|collegehumor||jquery|next|apply|support|calculate|prev|parseFloat|touchend|changemode|Math|triggerHandler|onClose|create|bottom|youtube|cufon|min|jQuery|position|for||imgsreg|trigger|block|flashvars|live|end||selector||autoresize|output|force|uk|co|keyCode|overflow|inline|toLowerCase|ratio|loadimage|vzaar|outerWidth|twitvid|outerHeight|ustream|dailymotion|replace|metacafe|255|player|vimeo|push|400|Image|shake|bing|undefined|moogaloop|at|link|tv|600|Add|size|youtu|specify|to|have|You|be|preload|animatedProperties|inject|body|wordpress|userAgent|self|loaded|absolute|The|relent||Cufon|fadeTo|showDuration|param|closeDuration|middle|trim|load|string|defaults|mapsreg|Previous|Next|array|fs|scrollTop|enablejsapi|is|watch|addevents|slice|scrollLeft|open|filter|autostart|target|total|distance|typeof|color|substring|maximinimize|fullscreen|loops|ex|round|ms|specialEasing|640|autoPlay|unserialize|create_gallery|padding|videoregs|unshift|margin|swf2html|of|360|Date|custombuttons|getTime|96B8|shift|keydown|scroll|onorientationchange|999|Maximize|init|Close||fixed|tiff|bmp|gif|jpeg|png|jpg|googlev2|svembed|layer|streetview|00b6ff19b1cb|d84a|isArray|8fec|227d|3ede2bc8|substr|emid|flashplayer|view|videos|onerror|01|guid|requested|cannot|videopress|Please|try|again|later|source|original|clone|s0|en_US|locale|6292|endPercent|5331|beginPercent|disabledComment|vid|loc|clip_id|collegehumornew|abort|AJAX|Error|status|Url|success|hd720|lighbox|IF_|frameborder|forcedQuality|yes|playerVars|fplayer|show_portrait|rgba|show_byline|show_title|classid|clsid|D27CDB6E|AE6D|11cf|pop|444553540000|movie|allowFullScreen|allowscriptaccess|always|wmode|transparent|hd|application|shockwave|fullscreenbutton|dataType|cache|value|chrome|GET|refresh|700|200|280|470|99999|speed|on|_mark|context|curAnim|os|in|phone|swing|fx|cur|px|find|windows|setTimeout|iphone|makeArray|get|removeAttribute|mobi|alert|mini|isFinite|opera|children|htc_flyer|googletv|android|parseJSON|mobile|blur|nofollow|area|ownerDocument|concat|Object|prototype|toString|call|String|arguments|search|nodeType|stopImmediatePropagation|throw|version|that|was|too|old|Lightbox|Evolution|requires|window|document".split("|"), 0, {}));
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.4
 *
 */
(function($, window, document, undefined) {
	var $window = $(window);
	$.fn.lazyload = function(options) {
		var elements = this;
		var $container;
		var settings = {
			threshold: 0,
			failure_limit: 0,
			event: "scroll",
			effect: "show",
			container: window,
			data_attribute: "original",
			skip_invisible: true,
			appear: null,
			load: null
		};

		function update() {
			var counter = 0;
			elements.each(function() {
				var $this = $(this);
				if (settings.skip_invisible && !$this.is(":visible")) {
					return;
				}
				if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) { /* Nothing. */
				} else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
					$this.trigger("appear"); /* if we found an image we'll load, reset the counter */
					counter = 0;
				} else {
					if (++counter > settings.failure_limit) {
						return false;
					}
				}
			});
		}
		if (options) { /* Maintain BC for a couple of versions. */
			if (undefined !== options.failurelimit) {
				options.failure_limit = options.failurelimit;
				delete options.failurelimit;
			}
			if (undefined !== options.effectspeed) {
				options.effect_speed = options.effectspeed;
				delete options.effectspeed;
			}
			$.extend(settings, options);
		} /* Cache container as jQuery as object. */
		$container = (settings.container === undefined || settings.container === window) ? $window : $(settings.container); /* Fire one scroll event per scroll. Not one scroll event per image. */
		if (0 === settings.event.indexOf("scroll")) {
			$container.bind(settings.event, function(event) {
				return update();
			});
		}
		this.each(function() {
			var self = this;
			var $self = $(self);
			self.loaded = false; /* When appear is triggered load original image. */
			$self.one("appear", function() {
				if (!this.loaded) {
					if (settings.appear) {
						var elements_left = elements.length;
						settings.appear.call(self, elements_left, settings);
					}
					$("<img />").bind("load", function() {
						$self.hide().attr("src", $self.data(settings.data_attribute))[settings.effect](settings.effect_speed);
						self.loaded = true; /* Remove image from array so it is not looped next time. */
						var temp = $.grep(elements, function(element) {
							return !element.loaded;
						});
						elements = $(temp);
						if (settings.load) {
							var elements_left = elements.length;
							settings.load.call(self, elements_left, settings);
						}
					}).attr("src", $self.data(settings.data_attribute));
				}
			}); /* When wanted event is triggered load original image */
			/* by triggering appear.                              */
			if (0 !== settings.event.indexOf("scroll")) {
				$self.bind(settings.event, function(event) {
					if (!self.loaded) {
						$self.trigger("appear");
					}
				});
			}
		}); /* Check if something appears when window is resized. */

		$(window).resize( function( event ) {
			update();
		});
		 /* With IOS5 force loading images when navigating with back button. */
		/* Non optimal workaround. */
		if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
			$window.bind("pageshow", function(event) {
				if (event.originalEvent.persisted) {
					elements.each(function() {
						$(this).trigger("appear");
					});
				}
			});
		} /* Force initial check if images should appear. */
		$(window).load(function() {
			update();
		});
		return this;
	}; /* Convenience methods in jQuery namespace.           */
	/* Use as  $.belowthefold(element, {threshold : 100, container : window}) */
	$.belowthefold = function(element, settings) {
		var fold;
		if (settings.container === undefined || settings.container === window) {
			fold = $window.height() + $window.scrollTop();
		} else {
			fold = $(settings.container).offset().top + $(settings.container).height();
		}
		return fold <= $(element).offset().top - settings.threshold;
	};
	$.rightoffold = function(element, settings) {
		var fold;
		if (settings.container === undefined || settings.container === window) {
			fold = $window.width() + $window.scrollLeft();
		} else {
			fold = $(settings.container).offset().left + $(settings.container).width();
		}
		return fold <= $(element).offset().left - settings.threshold;
	};
	$.abovethetop = function(element, settings) {
		var fold;
		if (settings.container === undefined || settings.container === window) {
			fold = $window.scrollTop();
		} else {
			fold = $(settings.container).offset().top;
		}
		return fold >= $(element).offset().top + settings.threshold + $(element).height();
	};
	$.leftofbegin = function(element, settings) {
		var fold;
		if (settings.container === undefined || settings.container === window) {
			fold = $window.scrollLeft();
		} else {
			fold = $(settings.container).offset().left;
		}
		return fold >= $(element).offset().left + settings.threshold + $(element).width();
	};
	$.inviewport = function(element, settings) {
		return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	}; /* Custom selectors for your convenience.   */
	/* Use as $("img:below-the-fold").something() or */
	/* $("img").filter(":below-the-fold").something() which is faster */
	$.extend($.expr[':'], {
		"below-the-fold": function(a) {
			return $.belowthefold(a, {
				threshold: 0
			});
		},
		"above-the-top": function(a) {
			return !$.belowthefold(a, {
				threshold: 0
			});
		},
		"right-of-screen": function(a) {
			return $.rightoffold(a, {
				threshold: 0
			});
		},
		"left-of-screen": function(a) {
			return !$.rightoffold(a, {
				threshold: 0
			});
		},
		"in-viewport": function(a) {
			return $.inviewport(a, {
				threshold: 0
			});
		},
		/* Maintain BC for couple of versions. */
		"above-the-fold": function(a) {
			return !$.belowthefold(a, {
				threshold: 0
			});
		},
		"right-of-fold": function(a) {
			return $.rightoffold(a, {
				threshold: 0
			});
		},
		"left-of-fold": function(a) {
			return !$.rightoffold(a, {
				threshold: 0
			});
		}
	});
})(jQuery, window, document);
!
function(a) {
	a(function() {
		a.support.transition = (function() {
			var b = (function() {
				var e = document.createElement("bootstrap"),
					d = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					},
					c;
				for (c in d) {
					if (e.style[c] !== undefined) {
						return d[c]
					}
				}
			}());
			return b && {
				end: b
			}
		})()
	})
}(window.jQuery);
!
function(d) {
	var c = '[data-dismiss="alert"]',
		b = function(e) {
			d(e).on("click", c, this.close)
		};
	b.prototype.close = function(j) {
		var i = d(this),
			g = i.attr("data-target"),
			h;
		if (!g) {
			g = i.attr("href");
			g = g && g.replace(/.*(?=#[^\s]*$)/, "")
		}
		h = d(g);
		j && j.preventDefault();
		h.length || (h = i.hasClass("alert") ? i : i.parent());
		h.trigger(j = d.Event("close"));
		if (j.isDefaultPrevented()) {
			return
		}
		h.removeClass("in");

		function f() {
			h.trigger("closed").remove()
		}
		d.support.transition && h.hasClass("fade") ? h.on(d.support.transition.end, f) : f()
	};
	var a = d.fn.alert;
	d.fn.alert = function(e) {
		return this.each(function() {
			var g = d(this),
				f = g.data("alert");
			if (!f) {
				g.data("alert", (f = new b(this)))
			}
			if (typeof e == "string") {
				f[e].call(g)
			}
		})
	};
	d.fn.alert.Constructor = b;
	d.fn.alert.noConflict = function() {
		d.fn.alert = a;
		return this
	};
	d(document).on("click.alert.data-api", c, b.prototype.close)
}(window.jQuery);
!
function(c) {
	var b = function(e, d) {
			this.$element = c(e);
			this.options = c.extend({}, c.fn.button.defaults, d)
		};
	b.prototype.setState = function(g) {
		var i = "disabled",
			e = this.$element,
			f = e.data(),
			h = e.is("input") ? "val" : "html";
		g = g + "Text";
		f.resetText || e.data("resetText", e[h]());
		e[h](f[g] || this.options[g]);
		setTimeout(function() {
			g == "loadingText" ? e.addClass(i).attr(i, i) : e.removeClass(i).removeAttr(i)
		}, 0)
	};
	b.prototype.toggle = function() {
		var d = this.$element.closest('[data-toggle="buttons-radio"]');
		d && d.find(".active").removeClass("active");
		this.$element.toggleClass("active")
	};
	var a = c.fn.button;
	c.fn.button = function(d) {
		return this.each(function() {
			var g = c(this),
				f = g.data("button"),
				e = typeof d == "object" && d;
			if (!f) {
				g.data("button", (f = new b(this, e)))
			}
			if (d == "toggle") {
				f.toggle()
			} else {
				if (d) {
					f.setState(d)
				}
			}
		})
	};
	c.fn.button.defaults = {
		loadingText: "loading..."
	};
	c.fn.button.Constructor = b;
	c.fn.button.noConflict = function() {
		c.fn.button = a;
		return this
	};
	c(document).on("click.button.data-api", "[data-toggle^=button]", function(f) {
		var d = c(f.target);
		if (!d.hasClass("btn")) {
			d = d.closest(".btn")
		}
		d.button("toggle")
	})
}(window.jQuery);
!
function(b) {
	var c = function(e, d) {
			this.$element = b(e);
			this.$indicators = this.$element.find(".carousel-indicators");
			this.options = d;
			this.options.pause == "hover" && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this))
		};
	c.prototype = {
		cycle: function(d) {
			if (!d) {
				this.paused = false
			}
			if (this.interval) {
				clearInterval(this.interval)
			}
			this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval));
			return this
		},
		getActiveIndex: function() {
			this.$active = this.$element.find(".item.active");
			this.$items = this.$active.parent().children();
			return this.$items.index(this.$active)
		},
		to: function(f) {
			var d = this.getActiveIndex(),
				e = this;
			if (f > (this.$items.length - 1) || f < 0) {
				return
			}
			if (this.sliding) {
				return this.$element.one("slid", function() {
					e.to(f)
				})
			}
			if (d == f) {
				return this.pause().cycle()
			}
			return this.slide(f > d ? "next" : "prev", b(this.$items[f]))
		},
		pause: function(d) {
			if (!d) {
				this.paused = true
			}
			if (this.$element.find(".next, .prev").length && b.support.transition.end) {
				this.$element.trigger(b.support.transition.end);
				this.cycle(true)
			}
			clearInterval(this.interval);
			this.interval = null;
			return this
		},
		next: function() {
			if (this.sliding) {
				return
			}
			return this.slide("next")
		},
		prev: function() {
			if (this.sliding) {
				return
			}
			return this.slide("prev")
		},
		slide: function(k, f) {
			var m = this.$element.find(".item.active"),
				d = f || m[k](),
				j = this.interval,
				l = k == "next" ? "left" : "right",
				g = k == "next" ? "first" : "last",
				h = this,
				i;
			this.sliding = true;
			j && this.pause();
			d = d.length ? d : this.$element.find(".item")[g]();
			i = b.Event("slide", {
				relatedTarget: d[0],
				direction: l
			});
			if (d.hasClass("active")) {
				return
			}
			if (this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				this.$element.one("slid", function() {
					var e = b(h.$indicators.children()[h.getActiveIndex()]);
					e && e.addClass("active")
				})
			}
			if (b.support.transition && this.$element.hasClass("slide")) {
				this.$element.trigger(i);
				if (i.isDefaultPrevented()) {
					return
				}
				d.addClass(k);
				d[0].offsetWidth;
				m.addClass(l);
				d.addClass(l);
				this.$element.one(b.support.transition.end, function() {
					d.removeClass([k, l].join(" ")).addClass("active");
					m.removeClass(["active", l].join(" "));
					h.sliding = false;
					setTimeout(function() {
						h.$element.trigger("slid")
					}, 0)
				})
			} else {
				this.$element.trigger(i);
				if (i.isDefaultPrevented()) {
					return
				}
				m.removeClass("active");
				d.addClass("active");
				this.sliding = false;
				this.$element.trigger("slid")
			}
			j && this.cycle();
			return this
		}
	};
	var a = b.fn.carousel;
	b.fn.carousel = function(d) {
		return this.each(function() {
			var h = b(this),
				g = h.data("carousel"),
				e = b.extend({}, b.fn.carousel.defaults, typeof d == "object" && d),
				f = typeof d == "string" ? d : e.slide;
			if (!g) {
				h.data("carousel", (g = new c(this, e)))
			}
			if (typeof d == "number") {
				g.to(d)
			} else {
				if (f) {
					g[f]()
				} else {
					if (e.interval) {
						g.pause().cycle()
					}
				}
			}
		})
	};
	b.fn.carousel.defaults = {
		interval: 5000,
		pause: "hover"
	};
	b.fn.carousel.Constructor = c;
	b.fn.carousel.noConflict = function() {
		b.fn.carousel = a;
		return this
	};
	b(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(j) {
		var i = b(this),
			f, d = b(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")),
			g = b.extend({}, d.data(), i.data()),
			h;
		d.carousel(g);
		if (h = i.attr("data-slide-to")) {
			d.data("carousel").pause().to(h).cycle()
		}
		j.preventDefault()
	})
}(window.jQuery);
!
function(b) {
	var c = function(e, d) {
			this.$element = b(e);
			this.options = b.extend({}, b.fn.collapse.defaults, d);
			if (this.options.parent) {
				this.$parent = b(this.options.parent)
			}
			this.options.toggle && this.toggle()
		};
	c.prototype = {
		constructor: c,
		dimension: function() {
			var d = this.$element.hasClass("width");
			return d ? "width" : "height"
		},
		show: function() {
			var g, d, f, e;
			if (this.transitioning || this.$element.hasClass("in")) {
				return
			}
			g = this.dimension();
			d = b.camelCase(["scroll", g].join("-"));
			f = this.$parent && this.$parent.find("> .accordion-group > .in");
			if (f && f.length) {
				e = f.data("collapse");
				if (e && e.transitioning) {
					return
				}
				f.collapse("hide");
				e || f.data("collapse", null)
			}
			this.$element[g](0);
			this.transition("addClass", b.Event("show"), "shown");
			b.support.transition && this.$element[g](this.$element[0][d])
		},
		hide: function() {
			var d;
			if (this.transitioning || !this.$element.hasClass("in")) {
				return
			}
			d = this.dimension();
			this.reset(this.$element[d]());
			this.transition("removeClass", b.Event("hide"), "hidden");
			this.$element[d](0)
		},
		reset: function(d) {
			var e = this.dimension();
			this.$element.removeClass("collapse")[e](d || "auto")[0].offsetWidth;
			this.$element[d !== null ? "addClass" : "removeClass"]("collapse");
			return this
		},
		transition: function(h, e, f) {
			var g = this,
				d = function() {
					if (e.type == "show") {
						g.reset()
					}
					g.transitioning = 0;
					g.$element.trigger(f)
				};
			this.$element.trigger(e);
			if (e.isDefaultPrevented()) {
				return
			}
			this.transitioning = 1;
			this.$element[h]("in");
			b.support.transition && this.$element.hasClass("collapse") ? this.$element.one(b.support.transition.end, d) : d()
		},
		toggle: function() {
			this[this.$element.hasClass("in") ? "hide" : "show"]()
		}
	};
	var a = b.fn.collapse;
	b.fn.collapse = function(d) {
		return this.each(function() {
			var g = b(this),
				f = g.data("collapse"),
				e = b.extend({}, b.fn.collapse.defaults, g.data(), typeof d == "object" && d);
			if (!f) {
				g.data("collapse", (f = new c(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	b.fn.collapse.defaults = {
		toggle: true
	};
	b.fn.collapse.Constructor = c;
	b.fn.collapse.noConflict = function() {
		b.fn.collapse = a;
		return this
	};
	b(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(i) {
		var h = b(this),
			d, g = h.attr("data-target") || i.preventDefault() || (d = h.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
			f = b(g).data("collapse") ? "toggle" : h.data();
		h[b(g).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
		b(g).collapse(f)
	})
}(window.jQuery);
!
function(c) {
	var b = function(e, d) {
			this.options = d;
			this.$element = c(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", c.proxy(this.hide, this));
			this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
		};
	b.prototype = {
		constructor: b,
		toggle: function() {
			return this[!this.isShown ? "show" : "hide"]()
		},
		show: function() {
			var d = this,
				f = c.Event("show");
			this.$element.trigger(f);
			if (this.isShown || f.isDefaultPrevented()) {
				return
			}
			this.isShown = true;
			this.escape();
			this.backdrop(function() {
				var e = c.support.transition && d.$element.hasClass("fade");
				if (!d.$element.parent().length) {
					d.$element.appendTo(document.body)
				}
				d.$element.show();
				if (e) {
					d.$element[0].offsetWidth
				}
				d.$element.addClass("in").attr("aria-hidden", false);
				d.enforceFocus();
				e ? d.$element.one(c.support.transition.end, function() {
					d.$element.focus().trigger("shown")
				}) : d.$element.focus().trigger("shown")
			})
		},
		hide: function(f) {
			f && f.preventDefault();
			var d = this;
			f = c.Event("hide");
			this.$element.trigger(f);
			if (!this.isShown || f.isDefaultPrevented()) {
				return
			}
			this.isShown = false;
			this.escape();
			c(document).off("focusin.modal");
			this.$element.removeClass("in").attr("aria-hidden", true);
			c.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
		},
		enforceFocus: function() {
			var d = this;
			c(document).on("focusin.modal", function(f) {
				if (d.$element[0] !== f.target && !d.$element.has(f.target).length) {
					d.$element.focus()
				}
			})
		},
		escape: function() {
			var d = this;
			if (this.isShown && this.options.keyboard) {
				this.$element.on("keyup.dismiss.modal", function(f) {
					f.which == 27 && d.hide()
				})
			} else {
				if (!this.isShown) {
					this.$element.off("keyup.dismiss.modal")
				}
			}
		},
		hideWithTransition: function() {
			var d = this,
				e = setTimeout(function() {
					d.$element.off(c.support.transition.end);
					d.hideModal()
				}, 500);
			this.$element.one(c.support.transition.end, function() {
				clearTimeout(e);
				d.hideModal()
			})
		},
		hideModal: function() {
			var d = this;
			this.$element.hide();
			this.backdrop(function() {
				d.removeBackdrop();
				d.$element.trigger("hidden")
			})
		},
		removeBackdrop: function() {
			this.$backdrop && this.$backdrop.remove();
			this.$backdrop = null
		},
		backdrop: function(g) {
			var f = this,
				e = this.$element.hasClass("fade") ? "fade" : "";
			if (this.isShown && this.options.backdrop) {
				var d = c.support.transition && e;
				this.$backdrop = c('<div class="modal-backdrop ' + e + '" />').appendTo(document.body);
				this.$backdrop.click(this.options.backdrop == "static" ? c.proxy(this.$element[0].focus, this.$element[0]) : c.proxy(this.hide, this));
				if (d) {
					this.$backdrop[0].offsetWidth
				}
				this.$backdrop.addClass("in");
				if (!g) {
					return
				}
				d ? this.$backdrop.one(c.support.transition.end, g) : g()
			} else {
				if (!this.isShown && this.$backdrop) {
					this.$backdrop.removeClass("in");
					c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(c.support.transition.end, g) : g()
				} else {
					if (g) {
						g()
					}
				}
			}
		}
	};
	var a = c.fn.modal;
	c.fn.modal = function(d) {
		return this.each(function() {
			var g = c(this),
				f = g.data("modal"),
				e = c.extend({}, c.fn.modal.defaults, g.data(), typeof d == "object" && d);
			if (!f) {
				g.data("modal", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			} else {
				if (e.show) {
					f.show()
				}
			}
		})
	};
	c.fn.modal.defaults = {
		backdrop: true,
		keyboard: true,
		show: true
	};
	c.fn.modal.Constructor = b;
	c.fn.modal.noConflict = function() {
		c.fn.modal = a;
		return this
	};
	c(document).on("click.modal.data-api", '[data-toggle="modal"]', function(i) {
		var h = c(this),
			f = h.attr("href"),
			d = c(h.attr("data-target") || (f && f.replace(/.*(?=#[^\s]+$)/, ""))),
			g = d.data("modal") ? "toggle" : c.extend({
				remote: !/#/.test(f) && f
			}, d.data(), h.data());
		i.preventDefault();
		d.modal(g).one("hide", function() {
			h.focus()
		})
	})
}(window.jQuery);
!
function(c) {
	var b = function(e, d) {
			this.init("tooltip", e, d)
		};
	b.prototype = {
		constructor: b,
		init: function(k, h, f) {
			var l, d, j, e, g;
			this.type = k;
			this.$element = c(h);
			this.options = this.getOptions(f);
			this.enabled = true;
			j = this.options.trigger.split(" ");
			for (g = j.length; g--;) {
				e = j[g];
				if (e == "click") {
					this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this))
				} else {
					if (e != "manual") {
						l = e == "hover" ? "mouseenter" : "focus";
						d = e == "hover" ? "mouseleave" : "blur";
						this.$element.on(l + "." + this.type, this.options.selector, c.proxy(this.enter, this));
						this.$element.on(d + "." + this.type, this.options.selector, c.proxy(this.leave, this))
					}
				}
			}
			this.options.selector ? (this._options = c.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			})) : this.fixTitle()
		},
		getOptions: function(d) {
			d = c.extend({}, c.fn[this.type].defaults, this.$element.data(), d);
			if (d.delay && typeof d.delay == "number") {
				d.delay = {
					show: d.delay,
					hide: d.delay
				}
			}
			return d
		},
		enter: function(h) {
			var g = c.fn[this.type].defaults,
				f = {},
				d;
			this._options && c.each(this._options, function(e, i) {
				if (g[e] != i) {
					f[e] = i
				}
			}, this);
			d = c(h.currentTarget)[this.type](f).data(this.type);
			if (!d.options.delay || !d.options.delay.show) {
				return d.show()
			}
			clearTimeout(this.timeout);
			d.hoverState = "in";
			this.timeout = setTimeout(function() {
				if (d.hoverState == "in") {
					d.show()
				}
			}, d.options.delay.show)
		},
		leave: function(f) {
			var d = c(f.currentTarget)[this.type](this._options).data(this.type);
			if (this.timeout) {
				clearTimeout(this.timeout)
			}
			if (!d.options.delay || !d.options.delay.hide) {
				return d.hide()
			}
			d.hoverState = "out";
			this.timeout = setTimeout(function() {
				if (d.hoverState == "out") {
					d.hide()
				}
			}, d.options.delay.hide)
		},
		show: function() {
			var i, k, g, j, d, h, f = c.Event("show");
			if (this.hasContent() && this.enabled) {
				this.$element.trigger(f);
				if (f.isDefaultPrevented()) {
					return
				}
				i = this.tip();
				this.setContent();
				if (this.options.animation) {
					i.addClass("fade")
				}
				d = typeof this.options.placement == "function" ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement;
				i.detach().css({
					top: 0,
					left: 0,
					display: "block"
				});
				this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
				k = this.getPosition();
				g = i[0].offsetWidth;
				j = i[0].offsetHeight;
				switch (d) {
				case "bottom":
					h = {
						top: k.top + k.height,
						left: k.left + k.width / 2 - g / 2
					};
					break;
				case "top":
					h = {
						top: k.top - j,
						left: k.left + k.width / 2 - g / 2
					};
					break;
				case "left":
					h = {
						top: k.top + k.height / 2 - j / 2,
						left: k.left - g
					};
					break;
				case "right":
					h = {
						top: k.top + k.height / 2 - j / 2,
						left: k.left + k.width
					};
					break
				}
				this.applyPlacement(h, d);
				this.$element.trigger("shown")
			}
		},
		applyPlacement: function(g, h) {
			var i = this.tip(),
				e = i[0].offsetWidth,
				l = i[0].offsetHeight,
				d, j, k, f;
			i.offset(g).addClass(h).addClass("in");
			d = i[0].offsetWidth;
			j = i[0].offsetHeight;
			if (h == "top" && j != l) {
				g.top = g.top + l - j;
				f = true
			}
			if (h == "bottom" || h == "top") {
				k = 0;
				if (g.left < 0) {
					k = g.left * -2;
					g.left = 0;
					i.offset(g);
					d = i[0].offsetWidth;
					j = i[0].offsetHeight
				}
				this.replaceArrow(k - e + d, d, "left")
			} else {
				this.replaceArrow(j - l, j, "top")
			}
			if (f) {
				i.offset(g)
			}
		},
		replaceArrow: function(f, e, d) {
			this.arrow().css(d, f ? (50 * (1 - f / e) + "%") : "")
		},
		setContent: function() {
			var e = this.tip(),
				d = this.getTitle();
			e.find(".tooltip-inner")[this.options.html ? "html" : "text"](d);
			e.removeClass("fade in top bottom left right")
		},
		hide: function() {
			var d = this,
				g = this.tip(),
				f = c.Event("hide");
			this.$element.trigger(f);
			if (f.isDefaultPrevented()) {
				return
			}
			g.removeClass("in");

			function h() {
				var e = setTimeout(function() {
					g.off(c.support.transition.end).detach()
				}, 500);
				g.one(c.support.transition.end, function() {
					clearTimeout(e);
					g.detach()
				})
			}
			c.support.transition && this.$tip.hasClass("fade") ? h() : g.detach();
			this.$element.trigger("hidden");
			return this
		},
		fixTitle: function() {
			var d = this.$element;
			if (d.attr("title") || typeof(d.attr("data-original-title")) != "string") {
				d.attr("data-original-title", d.attr("title") || "").attr("title", "")
			}
		},
		hasContent: function() {
			return this.getTitle()
		},
		getPosition: function() {
			var d = this.$element[0];
			return c.extend({}, (typeof d.getBoundingClientRect == "function") ? d.getBoundingClientRect() : {
				width: d.offsetWidth,
				height: d.offsetHeight
			}, this.$element.offset())
		},
		getTitle: function() {
			var f, d = this.$element,
				e = this.options;
			f = d.attr("data-original-title") || (typeof e.title == "function" ? e.title.call(d[0]) : e.title);
			return f
		},
		tip: function() {
			return this.$tip = this.$tip || c(this.options.template)
		},
		arrow: function() {
			return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
		},
		validate: function() {
			if (!this.$element[0].parentNode) {
				this.hide();
				this.$element = null;
				this.options = null
			}
		},
		enable: function() {
			this.enabled = true
		},
		disable: function() {
			this.enabled = false
		},
		toggleEnabled: function() {
			this.enabled = !this.enabled
		},
		toggle: function(f) {
			var d = f ? c(f.currentTarget)[this.type](this._options).data(this.type) : this;
			d.tip().hasClass("in") ? d.hide() : d.show()
		},
		destroy: function() {
			this.hide().$element.off("." + this.type).removeData(this.type)
		}
	};
	var a = c.fn.tooltip;
	c.fn.tooltip = function(d) {
		return this.each(function() {
			var g = c(this),
				f = g.data("tooltip"),
				e = typeof d == "object" && d;
			if (!f) {
				g.data("tooltip", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.tooltip.Constructor = b;
	c.fn.tooltip.defaults = {
		animation: true,
		placement: "top",
		selector: false,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: false,
		container: false
	};
	c.fn.tooltip.noConflict = function() {
		c.fn.tooltip = a;
		return this
	}
}(window.jQuery);
!
function(c) {
	var b = function(e, d) {
			this.init("popover", e, d)
		};
	b.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype, {
		constructor: b,
		setContent: function() {
			var f = this.tip(),
				e = this.getTitle(),
				d = this.getContent();
			f.find(".popover-title")[this.options.html ? "html" : "text"](e);
			f.find(".popover-content")[this.options.html ? "html" : "text"](d);
			f.removeClass("fade top bottom left right in")
		},
		hasContent: function() {
			return this.getTitle() || this.getContent()
		},
		getContent: function() {
			var e, d = this.$element,
				f = this.options;
			e = (typeof f.content == "function" ? f.content.call(d[0]) : f.content) || d.attr("data-content");
			return e
		},
		tip: function() {
			if (!this.$tip) {
				this.$tip = c(this.options.template)
			}
			return this.$tip
		},
		destroy: function() {
			this.hide().$element.off("." + this.type).removeData(this.type)
		}
	});
	var a = c.fn.popover;
	c.fn.popover = function(d) {
		return this.each(function() {
			var g = c(this),
				f = g.data("popover"),
				e = typeof d == "object" && d;
			if (!f) {
				g.data("popover", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.popover.Constructor = b;
	c.fn.popover.defaults = c.extend({}, c.fn.tooltip.defaults, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});
	c.fn.popover.noConflict = function() {
		c.fn.popover = a;
		return this
	}
}(window.jQuery);
!
function(c) {
	function b(g, f) {
		var h = c.proxy(this.process, this),
			d = c(g).is("body") ? c(window) : c(g),
			e;
		this.options = c.extend({}, c.fn.scrollspy.defaults, f);
		this.$scrollElement = d.on("scroll.scroll-spy.data-api", h);
		this.selector = (this.options.target || ((e = c(g).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "")) || "") + " .nav li > a";
		this.$body = c("body");
		this.refresh();
		this.process()
	}
	b.prototype = {
		constructor: b,
		refresh: function() {
			var d = this,
				e;
			this.offsets = c([]);
			this.targets = c([]);
			e = this.$body.find(this.selector).map(function() {
				var g = c(this),
					f = g.data("target") || g.attr("href"),
					h = /^#\w/.test(f) && c(f);
				return (h && h.length && [
					[h.position().top + (!c.isWindow(d.$scrollElement.get(0)) && d.$scrollElement.scrollTop()), f]
				]) || null
			}).sort(function(g, f) {
				return g[0] - f[0]
			}).each(function() {
				d.offsets.push(this[0]);
				d.targets.push(this[1])
			})
		},
		process: function() {
			var j = this.$scrollElement.scrollTop() + this.options.offset,
				f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
				h = f - this.$scrollElement.height(),
				g = this.offsets,
				d = this.targets,
				k = this.activeTarget,
				e;
			if (j >= h) {
				return k != (e = d.last()[0]) && this.activate(e)
			}
			for (e = g.length; e--;) {
				k != d[e] && j >= g[e] && (!g[e + 1] || j <= g[e + 1]) && this.activate(d[e])
			}
		},
		activate: function(f) {
			var e, d;
			this.activeTarget = f;
			c(this.selector).parent(".active").removeClass("active");
			d = this.selector + '[data-target="' + f + '"],' + this.selector + '[href="' + f + '"]';
			e = c(d).parent("li").addClass("active");
			if (e.parent(".dropdown-menu").length) {
				e = e.closest("li.dropdown").addClass("active")
			}
			e.trigger("activate")
		}
	};
	var a = c.fn.scrollspy;
	c.fn.scrollspy = function(d) {
		return this.each(function() {
			var g = c(this),
				f = g.data("scrollspy"),
				e = typeof d == "object" && d;
			if (!f) {
				g.data("scrollspy", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.scrollspy.Constructor = b;
	c.fn.scrollspy.defaults = {
		offset: 10
	};
	c.fn.scrollspy.noConflict = function() {
		c.fn.scrollspy = a;
		return this
	};
	c(window).on("load", function() {
		c('[data-spy="scroll"]').each(function() {
			var d = c(this);
			d.scrollspy(d.data())
		})
	})
}(window.jQuery);
!
function(b) {
	var c = function(e, d) {
			this.$element = b(e);
			this.options = b.extend({}, b.fn.typeahead.defaults, d);
			this.matcher = this.options.matcher || this.matcher;
			this.sorter = this.options.sorter || this.sorter;
			this.highlighter = this.options.highlighter || this.highlighter;
			this.updater = this.options.updater || this.updater;
			this.source = this.options.source;
			this.$menu = b(this.options.menu);
			this.shown = false;
			this.listen()
		};
	c.prototype = {
		constructor: c,
		select: function() {
			var d = this.$menu.find(".active").attr("data-value");
			this.$element.val(this.updater(d)).change();
			return this.hide()
		},
		updater: function(d) {
			return d
		},
		show: function() {
			var d = b.extend({}, this.$element.position(), {
				height: this.$element[0].offsetHeight
			});
			this.$menu.insertAfter(this.$element).css({
				top: d.top + d.height,
				left: d.left
			}).show();
			this.shown = true;
			return this
		},
		hide: function() {
			this.$menu.hide();
			this.shown = false;
			return this
		},
		lookup: function(e) {
			var d;
			this.query = this.$element.val();
			if (!this.query || this.query.length < this.options.minLength) {
				return this.shown ? this.hide() : this
			}
			d = b.isFunction(this.source) ? this.source(this.query, b.proxy(this.process, this)) : this.source;
			return d ? this.process(d) : this
		},
		process: function(d) {
			var e = this;
			d = b.grep(d, function(f) {
				return e.matcher(f)
			});
			d = this.sorter(d);
			if (!d.length) {
				return this.shown ? this.hide() : this
			}
			return this.render(d.slice(0, this.options.items)).show()
		},
		matcher: function(d) {
			return ~d.toLowerCase().indexOf(this.query.toLowerCase())
		},
		sorter: function(f) {
			var g = [],
				e = [],
				d = [],
				h;
			while (h = f.shift()) {
				if (!h.toLowerCase().indexOf(this.query.toLowerCase())) {
					g.push(h)
				} else {
					if (~h.indexOf(this.query)) {
						e.push(h)
					} else {
						d.push(h)
					}
				}
			}
			return g.concat(e, d)
		},
		highlighter: function(d) {
			var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
			return d.replace(new RegExp("(" + e + ")", "ig"), function(f, g) {
				return "<strong>" + g + "</strong>"
			})
		},
		render: function(d) {
			var e = this;
			d = b(d).map(function(f, g) {
				f = b(e.options.item).attr("data-value", g);
				f.find("a").html(e.highlighter(g));
				return f[0]
			});
			d.first().addClass("active");
			this.$menu.html(d);
			return this
		},
		next: function(e) {
			var f = this.$menu.find(".active").removeClass("active"),
				d = f.next();
			if (!d.length) {
				d = b(this.$menu.find("li")[0])
			}
			d.addClass("active")
		},
		prev: function(e) {
			var f = this.$menu.find(".active").removeClass("active"),
				d = f.prev();
			if (!d.length) {
				d = this.$menu.find("li").last()
			}
			d.addClass("active")
		},
		listen: function() {
			this.$element.on("focus", b.proxy(this.focus, this)).on("blur", b.proxy(this.blur, this)).on("keypress", b.proxy(this.keypress, this)).on("keyup", b.proxy(this.keyup, this));
			if (this.eventSupported("keydown")) {
				this.$element.on("keydown", b.proxy(this.keydown, this))
			}
			this.$menu.on("click", b.proxy(this.click, this)).on("mouseenter", "li", b.proxy(this.mouseenter, this)).on("mouseleave", "li", b.proxy(this.mouseleave, this))
		},
		eventSupported: function(d) {
			var e = d in this.$element;
			if (!e) {
				this.$element.setAttribute(d, "return;");
				e = typeof this.$element[d] === "function"
			}
			return e
		},
		move: function(d) {
			if (!this.shown) {
				return
			}
			switch (d.keyCode) {
			case 9:
			case 13:
			case 27:
				d.preventDefault();
				break;
			case 38:
				d.preventDefault();
				this.prev();
				break;
			case 40:
				d.preventDefault();
				this.next();
				break
			}
			d.stopPropagation()
		},
		keydown: function(d) {
			this.suppressKeyPressRepeat = ~b.inArray(d.keyCode, [40, 38, 9, 13, 27]);
			this.move(d)
		},
		keypress: function(d) {
			if (this.suppressKeyPressRepeat) {
				return
			}
			this.move(d)
		},
		keyup: function(d) {
			switch (d.keyCode) {
			case 40:
			case 38:
			case 16:
			case 17:
			case 18:
				break;
			case 9:
			case 13:
				if (!this.shown) {
					return
				}
				this.select();
				break;
			case 27:
				if (!this.shown) {
					return
				}
				this.hide();
				break;
			default:
				this.lookup()
			}
			d.stopPropagation();
			d.preventDefault()
		},
		focus: function(d) {
			this.focused = true
		},
		blur: function(d) {
			this.focused = false;
			if (!this.mousedover && this.shown) {
				this.hide()
			}
		},
		click: function(d) {
			d.stopPropagation();
			d.preventDefault();
			this.select();
			this.$element.focus()
		},
		mouseenter: function(d) {
			this.mousedover = true;
			this.$menu.find(".active").removeClass("active");
			b(d.currentTarget).addClass("active")
		},
		mouseleave: function(d) {
			this.mousedover = false;
			if (!this.focused && this.shown) {
				this.hide()
			}
		}
	};
	var a = b.fn.typeahead;
	b.fn.typeahead = function(d) {
		return this.each(function() {
			var g = b(this),
				f = g.data("typeahead"),
				e = typeof d == "object" && d;
			if (!f) {
				g.data("typeahead", (f = new c(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	b.fn.typeahead.defaults = {
		source: [],
		items: 8,
		menu: '<ul class="typeahead dropdown-menu"></ul>',
		item: '<li><a href="#"></a></li>',
		minLength: 1
	};
	b.fn.typeahead.Constructor = c;
	b.fn.typeahead.noConflict = function() {
		b.fn.typeahead = a;
		return this
	};
	b(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(f) {
		var d = b(this);
		if (d.data("typeahead")) {
			return
		}
		d.typeahead(d.data())
	})
}(window.jQuery);
!
function(c) {
	var b = function(e, d) {
			this.options = c.extend({}, c.fn.affix.defaults, d);
			this.$window = c(window).on("scroll.affix.data-api", c.proxy(this.checkPosition, this)).on("click.affix.data-api", c.proxy(function() {
				setTimeout(c.proxy(this.checkPosition, this), 1)
			}, this));
			this.$element = c(e);
			this.checkPosition()
		};
	b.prototype.checkPosition = function() {
		if (!this.$element.is(":visible")) {
			return
		}
		var h = c(document).height(),
			j = this.$window.scrollTop(),
			d = this.$element.offset(),
			k = this.options.offset,
			f = k.bottom,
			g = k.top,
			i = "affix affix-top affix-bottom",
			e;
		if (typeof k != "object") {
			f = g = k
		}
		if (typeof g == "function") {
			g = k.top()
		}
		if (typeof f == "function") {
			f = k.bottom()
		}
		e = this.unpin != null && (j + this.unpin <= d.top) ? false : f != null && (d.top + this.$element.height() >= h - f) ? "bottom" : g != null && j <= g ? "top" : false;
		if (this.affixed === e) {
			return
		}
		this.affixed = e;
		this.unpin = e == "bottom" ? d.top - j : null;
		this.$element.removeClass(i).addClass("affix" + (e ? "-" + e : ""))
	};
	var a = c.fn.affix;
	c.fn.affix = function(d) {
		return this.each(function() {
			var g = c(this),
				f = g.data("affix"),
				e = typeof d == "object" && d;
			if (!f) {
				g.data("affix", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.affix.Constructor = b;
	c.fn.affix.defaults = {
		offset: 0
	};
	c.fn.affix.noConflict = function() {
		c.fn.affix = a;
		return this
	};
	c(window).on("load", function() {
		c('[data-spy="affix"]').each(function() {
			var e = c(this),
				d = e.data();
			d.offset = d.offset || {};
			d.offsetBottom && (d.offset.bottom = d.offsetBottom);
			d.offsetTop && (d.offset.top = d.offsetTop);
			e.affix(d)
		})
	})
}(window.jQuery);
window.matchMedia = window.matchMedia || (function(e, f) {
	var c, a = e.documentElement,
		b = a.firstElementChild || a.firstChild,
		d = e.createElement("body"),
		g = e.createElement("div");
	g.id = "mq-test-1";
	g.style.cssText = "position:absolute;top:-100em";
	d.style.background = "none";
	d.appendChild(g);
	return function(h) {
		g.innerHTML = '&shy;<style media="' + h + '"> #mq-test-1 { width: 42px; }</style>';
		a.insertBefore(d, b);
		c = g.offsetWidth === 42;
		a.removeChild(d);
		return {
			matches: c,
			media: h
		}
	}
}(document));
(function($) {
	$.fn.dcAccordion = function(options) {
		var defaults = {
			classParent: 'dcjq-parent',
			classActive: 'active',
			classArrow: 'dcjq-icon',
			classCount: 'dcjq-count',
			classExpand: 'dcjq-current-parent',
			eventType: 'click',
			hoverDelay: 300,
			menuClose: true,
			autoClose: true,
			autoExpand: false,
			speed: 'slow',
			saveState: true,
			disableLink: true,
			showCount: false,
			cookie: 'dcjq-accordion'
		};
		var options = $.extend(defaults, options);
		this.each(function(options) {
			var obj = this;
			setUpAccordion();
			if (defaults.saveState == true) {
				checkCookie(defaults.cookie, obj)
			}
			if (defaults.autoExpand == true) {
				$('li.' + defaults.classExpand + ' > a').addClass(defaults.classActive)
			}
			resetAccordion();
			if (defaults.eventType == 'hover') {
				var config = {
					sensitivity: 2,
					interval: defaults.hoverDelay,
					over: linkOver,
					timeout: defaults.hoverDelay,
					out: linkOut
				};
				$('li a', obj).hoverIntent(config);
				var configMenu = {
					sensitivity: 2,
					interval: 1000,
					over: menuOver,
					timeout: 1000,
					out: menuOut
				};
				$(obj).hoverIntent(configMenu);
				if (defaults.disableLink == true) {
					$('li a', obj).click(function(e) {
						if ($(this).siblings('ul').length > 0) {
							e.preventDefault()
						}
					})
				}
			} else {
				$('li a', obj).click(function(e) {
					$activeLi = $(this).parent('li');
					$parentsLi = $activeLi.parents('li');
					$parentsUl = $activeLi.parents('ul');
					if (defaults.disableLink == true) {
						if ($(this).siblings('ul').length > 0) {
							e.preventDefault()
						}
					}
					if (defaults.autoClose == true) {
						autoCloseAccordion($parentsLi, $parentsUl)
					}
					if ($('> ul', $activeLi).is(':visible')) {
						$('ul', $activeLi).slideUp(defaults.speed);
						$('a', $activeLi).removeClass(defaults.classActive)
					} else {
						$(this).siblings('ul').slideToggle(defaults.speed);
						$('> a', $activeLi).addClass(defaults.classActive)
					}
					if (defaults.saveState == true) {
						createCookie(defaults.cookie, obj)
					}
				})
			}

			function setUpAccordion() {
				$arrow = '<span class="' + defaults.classArrow + '"></span>';
				$('> ul', obj).show();
				$('li', obj).each(function() {
					var classParentLi = defaults.classParent + '-li';
					if ($('> ul', this).length > 0) {
						$(this).addClass(classParentLi);
						$('> a', this).addClass(defaults.classParent).append($arrow);
						if (defaults.showCount == true) {
							var parentLink = $('li:not(.' + defaults.classParent + ') > a', this);
							var countParent = parseInt($(parentLink).length);
							getCount = countParent;
							$('> a', this).append(' <span class="' + defaults.classCount + '">(' + getCount + ')</span>')
						}
					}
				});
				$('> ul', obj).hide()
			}

			function linkOver() {
				$activeLi = $(this).parent('li');
				$parentsLi = $activeLi.parents('li');
				$parentsUl = $activeLi.parents('ul');
				if (defaults.autoClose == true) {
					autoCloseAccordion($parentsLi, $parentsUl)
				}
				if ($('> ul', $activeLi).is(':visible')) {
					$('ul', $activeLi).slideUp(defaults.speed);
					$('a', $activeLi).removeClass(defaults.classActive)
				} else {
					$(this).siblings('ul').slideToggle(defaults.speed);
					$('> a', $activeLi).addClass(defaults.classActive)
				}
				if (defaults.saveState == true) {
					createCookie(defaults.cookie, obj)
				}
			}

			function linkOut() {}

			function menuOver() {}

			function menuOut() {
				if (defaults.menuClose == true) {
					$('ul', obj).slideUp(defaults.speed);
					$('a', obj).removeClass(defaults.classActive);
					createCookie(defaults.cookie, obj)
				}
			}

			function autoCloseAccordion($parentsLi, $parentsUl) {
				$('ul', obj).not($parentsUl).slideUp(defaults.speed);
				$('a', obj).removeClass(defaults.classActive);
				$('> a', $parentsLi).addClass(defaults.classActive)
			}

			function resetAccordion() {
				$('ul', obj).hide();
				$allActiveLi = $('a.' + defaults.classActive, obj);
				$allActiveLi.siblings('ul').show()
			}
		});

		function checkCookie(cookieId, obj) {
			var cookieVal = $.cookie(cookieId);
			if (cookieVal != null) {
				var activeArray = cookieVal.split(',');
				$.each(activeArray, function(index, value) {
					var $cookieLi = $('li:eq(' + value + ')', obj);
					$('> a', $cookieLi).addClass(defaults.classActive);
					var $parentsLi = $cookieLi.parents('li');
					$('> a', $parentsLi).addClass(defaults.classActive)
				})
			}
		}

		function createCookie(cookieId, obj) {
			var activeIndex = [];
			$('li a.' + defaults.classActive, obj).each(function(i) {
				var $arrayItem = $(this).parent('li');
				var itemIndex = $('li', obj).index($arrayItem);
				activeIndex.push(itemIndex)
			});
			$.cookie(cookieId, activeIndex, {
				path: '/'
			})
		}
	}
})(jQuery);
/*
 * jQuery EasyTabs plugin 3.2.0
 *
 * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Thu May 09 17:30:00 2013 -0500
 */
(function($) {
	$.easytabs = function(container, options) {
		// Attach to plugin anything that should be available via
		// the $container.data('easytabs') object
		var plugin = this,
			$container = $(container),
			defaults = {
				animate: true,
				panelActiveClass: "active",
				tabActiveClass: "active",
				defaultTab: "li:first-child",
				animationSpeed: "normal",
				tabs: "> ul > li",
				updateHash: true,
				cycle: false,
				collapsible: false,
				collapsedClass: "collapsed",
				collapsedByDefault: true,
				uiTabs: false,
				transitionIn: 'fadeIn',
				transitionOut: 'fadeOut',
				transitionInEasing: 'swing',
				transitionOutEasing: 'swing',
				transitionCollapse: 'slideUp',
				transitionUncollapse: 'slideDown',
				transitionCollapseEasing: 'swing',
				transitionUncollapseEasing: 'swing',
				containerClass: "",
				tabsClass: "",
				tabClass: "",
				panelClass: "",
				cache: true,
				event: 'click',
				panelContext: $container
			},
			// Internal instance variables
			// (not available via easytabs object)
			$defaultTab, $defaultTabLink, transitions, lastHash, skipUpdateToHash, animationSpeeds = {
				fast: 200,
				normal: 400,
				slow: 600
			},
			// Shorthand variable so that we don't need to call
			// plugin.settings throughout the plugin code
			settings;
		// =============================================================
		// Functions available via easytabs object
		// =============================================================
		plugin.init = function() {
			plugin.settings = settings = $.extend({}, defaults, options);
			settings.bind_str = settings.event + ".easytabs";
			// Add jQuery UI's crazy class names to markup,
			// so that markup will match theme CSS
			if (settings.uiTabs) {
				settings.tabActiveClass = 'ui-tabs-selected';
				settings.containerClass = 'ui-tabs ui-widget ui-widget-content ui-corner-all';
				settings.tabsClass = 'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all';
				settings.tabClass = 'ui-state-default ui-corner-top';
				settings.panelClass = 'ui-tabs-panel ui-widget-content ui-corner-bottom';
			}
			// If collapsible is true and defaultTab specified, assume user wants defaultTab showing (not collapsed)
			if (settings.collapsible && options.defaultTab !== undefined && options.collpasedByDefault === undefined) {
				settings.collapsedByDefault = false;
			}
			// Convert 'normal', 'fast', and 'slow' animation speed settings to their respective speed in milliseconds
			if (typeof(settings.animationSpeed) === 'string') {
				settings.animationSpeed = animationSpeeds[settings.animationSpeed];
			}
			$('a.anchor').remove().prependTo('body');
			// Store easytabs object on container so we can easily set
			// properties throughout
			$container.data('easytabs', {});
			plugin.setTransitions();
			plugin.getTabs();
			addClasses();
			setDefaultTab();
			bindToTabClicks();
			initHashChange();
			initCycle();
			// Append data-easytabs HTML attribute to make easy to query for
			// easytabs instances via CSS pseudo-selector
			$container.attr('data-easytabs', true);
		};
		// Set transitions for switching between tabs based on options.
		// Could be used to update transitions if settings are changes.
		plugin.setTransitions = function() {
			transitions = (settings.animate) ? {
				show: settings.transitionIn,
				hide: settings.transitionOut,
				speed: settings.animationSpeed,
				collapse: settings.transitionCollapse,
				uncollapse: settings.transitionUncollapse,
				halfSpeed: settings.animationSpeed / 2
			} : {
				show: "show",
				hide: "hide",
				speed: 0,
				collapse: "hide",
				uncollapse: "show",
				halfSpeed: 0
			};
		};
		// Find and instantiate tabs and panels.
		// Could be used to reset tab and panel collection if markup is
		// modified.
		plugin.getTabs = function() {
			var $matchingPanel;
			// Find the initial set of elements matching the setting.tabs
			// CSS selector within the container
			plugin.tabs = $container.find(settings.tabs),
			// Instantiate panels as empty jquery object
			plugin.panels = $(), plugin.tabs.each(function() {
				var $tab = $(this),
					$a = $tab.children('a'),
					// targetId is the ID of the panel, which is either the
					// `href` attribute for non-ajax tabs, or in the
					// `data-target` attribute for ajax tabs since the `href` is
					// the ajax URL
					targetId = $tab.children('a').data('target');
				$tab.data('easytabs', {});
				// If the tab has a `data-target` attribute, and is thus an ajax tab
				if (targetId !== undefined && targetId !== null) {
					$tab.data('easytabs').ajax = $a.attr('href');
				} else {
					targetId = $a.attr('href');
				}
				targetId = targetId.match(/#([^\?]+)/)[1];
				$matchingPanel = settings.panelContext.find("#" + targetId);
				// If tab has a matching panel, add it to panels
				if ($matchingPanel.length) {
					// Store panel height before hiding
					$matchingPanel.data('easytabs', {
						position: $matchingPanel.css('position'),
						visibility: $matchingPanel.css('visibility')
					});
					// Don't hide panel if it's active (allows `getTabs` to be called manually to re-instantiate tab collection)
					$matchingPanel.not(settings.panelActiveClass).hide();
					plugin.panels = plugin.panels.add($matchingPanel);
					$tab.data('easytabs').panel = $matchingPanel;
					// Otherwise, remove tab from tabs collection
				} else {
					plugin.tabs = plugin.tabs.not($tab);
					if ('console' in window) {
						console.warn('Warning: tab without matching panel for selector \'#' + targetId + '\' removed from set');
					}
				}
			});
		};
		// Select tab and fire callback
		plugin.selectTab = function($clicked, callback) {
			var url = window.location,
				hash = url.hash.match(/^[^\?]*/)[0],
				$targetPanel = $clicked.parent().data('easytabs').panel,
				ajaxUrl = $clicked.parent().data('easytabs').ajax;
			// Tab is collapsible and active => toggle collapsed state
			if (settings.collapsible && !skipUpdateToHash && ($clicked.hasClass(settings.tabActiveClass) || $clicked.hasClass(settings.collapsedClass))) {
				plugin.toggleTabCollapse($clicked, $targetPanel, ajaxUrl, callback);
				// Tab is not active and panel is not active => select tab
			} else if (!$clicked.hasClass(settings.tabActiveClass) || !$targetPanel.hasClass(settings.panelActiveClass)) {
				activateTab($clicked, $targetPanel, ajaxUrl, callback);
				// Cache is disabled => reload (e.g reload an ajax tab).
			} else if (!settings.cache) {
				activateTab($clicked, $targetPanel, ajaxUrl, callback);
			}
		};
		// Toggle tab collapsed state and fire callback
		plugin.toggleTabCollapse = function($clicked, $targetPanel, ajaxUrl, callback) {
			plugin.panels.stop(true, true);
			if (fire($container, "easytabs:before", [$clicked, $targetPanel, settings])) {
				plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);
				// If panel is collapsed, uncollapse it
				if ($clicked.hasClass(settings.collapsedClass)) {
					// If ajax panel and not already cached
					if (ajaxUrl && (!settings.cache || !$clicked.parent().data('easytabs').cached)) {
						$container.trigger('easytabs:ajax:beforeSend', [$clicked, $targetPanel]);
						$targetPanel.load(ajaxUrl, function(response, status, xhr) {
							$clicked.parent().data('easytabs').cached = true;
							$container.trigger('easytabs:ajax:complete', [$clicked, $targetPanel, response, status, xhr]);
						});
					}
					// Update CSS classes of tab and panel
					$clicked.parent().removeClass(settings.collapsedClass).addClass(settings.tabActiveClass).children().removeClass(settings.collapsedClass).addClass(settings.tabActiveClass);
					$targetPanel.addClass(settings.panelActiveClass)[transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, function() {
						$container.trigger('easytabs:midTransition', [$clicked, $targetPanel, settings]);
						if (typeof callback == 'function') callback();
					});
					// Otherwise, collapse it
				} else {
					// Update CSS classes of tab and panel
					$clicked.addClass(settings.collapsedClass).parent().addClass(settings.collapsedClass);
					$targetPanel.removeClass(settings.panelActiveClass)[transitions.collapse](transitions.speed, settings.transitionCollapseEasing, function() {
						$container.trigger("easytabs:midTransition", [$clicked, $targetPanel, settings]);
						if (typeof callback == 'function') callback();
					});
				}
			}
		};
		// Find tab with target panel matching value
		plugin.matchTab = function(hash) {
			return plugin.tabs.find("[href='" + hash + "'],[data-target='" + hash + "']").first();
		};
		// Find panel with `id` matching value
		plugin.matchInPanel = function(hash) {
			return (hash && plugin.validId(hash) ? plugin.panels.filter(':has(' + hash + ')').first() : []);
		};
		// Make sure hash is a valid id value (admittedly strict in that HTML5 allows almost anything without a space)
		// but jQuery has issues with such id values anyway, so we can afford to be strict here.
		plugin.validId = function(id) {
			return id.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/);
		};
		// Select matching tab when URL hash changes
		plugin.selectTabFromHashChange = function() {
			var hash = window.location.hash.match(/^[^\?]*/)[0],
				$tab = plugin.matchTab(hash),
				$panel;
			if (settings.updateHash) {
				// If hash directly matches tab
				if ($tab.length) {
					skipUpdateToHash = true;
					plugin.selectTab($tab);
				} else {
					$panel = plugin.matchInPanel(hash);
					// If panel contains element matching hash
					if ($panel.length) {
						hash = '#' + $panel.attr('id');
						$tab = plugin.matchTab(hash);
						skipUpdateToHash = true;
						plugin.selectTab($tab);
						// If default tab is not active...
					} else if (!$defaultTab.hasClass(settings.tabActiveClass) && !settings.cycle) {
						// ...and hash is blank or matches a parent of the tab container or
						// if the last tab (before the hash updated) was one of the other tabs in this container.
						if (hash === '' || plugin.matchTab(lastHash).length || $container.closest(hash).length) {
							skipUpdateToHash = true;
							plugin.selectTab($defaultTabLink);
						}
					}
				}
			}
		};
		// Cycle through tabs
		plugin.cycleTabs = function(tabNumber) {
			if (settings.cycle) {
				tabNumber = tabNumber % plugin.tabs.length;
				$tab = $(plugin.tabs[tabNumber]).children("a").first();
				skipUpdateToHash = true;
				plugin.selectTab($tab, function() {
					setTimeout(function() {
						plugin.cycleTabs(tabNumber + 1);
					}, settings.cycle);
				});
			}
		};
		// Convenient public methods
		plugin.publicMethods = {
			select: function(tabSelector) {
				var $tab;
				// Find tab container that matches selector (like 'li#tab-one' which contains tab link)
				if (($tab = plugin.tabs.filter(tabSelector)).length === 0) {
					// Find direct tab link that matches href (like 'a[href="#panel-1"]')
					if (($tab = plugin.tabs.find("a[href='" + tabSelector + "']")).length === 0) {
						// Find direct tab link that matches selector (like 'a#tab-1')
						if (($tab = plugin.tabs.find("a" + tabSelector)).length === 0) {
							// Find direct tab link that matches data-target (lik 'a[data-target="#panel-1"]')
							if (($tab = plugin.tabs.find("[data-target='" + tabSelector + "']")).length === 0) {
								// Find direct tab link that ends in the matching href (like 'a[href$="#panel-1"]', which would also match http://example.com/currentpage/#panel-1)
								if (($tab = plugin.tabs.find("a[href$='" + tabSelector + "']")).length === 0) {
									$.error('Tab \'' + tabSelector + '\' does not exist in tab set');
								}
							}
						}
					}
				} else {
					// Select the child tab link, since the first option finds the tab container (like <li>)
					$tab = $tab.children("a").first();
				}
				plugin.selectTab($tab);
			}
		};
		// =============================================================
		// Private functions
		// =============================================================
		// Triggers an event on an element and returns the event result
		var fire = function(obj, name, data) {
				var event = $.Event(name);
				obj.trigger(event, data);
				return event.result !== false;
			}
			// Add CSS classes to markup (if specified), called by init
		var addClasses = function() {
				$container.addClass(settings.containerClass);
				plugin.tabs.parent().addClass(settings.tabsClass);
				plugin.tabs.addClass(settings.tabClass);
				plugin.panels.addClass(settings.panelClass);
			};
		// Set the default tab, whether from hash (bookmarked) or option,
		// called by init
		var setDefaultTab = function() {
				var hash = window.location.hash.match(/^[^\?]*/)[0],
					$selectedTab = plugin.matchTab(hash).parent(),
					$panel;
				// If hash directly matches one of the tabs, active on page-load
				if ($selectedTab.length === 1) {
					$defaultTab = $selectedTab;
					settings.cycle = false;
				} else {
					$panel = plugin.matchInPanel(hash);
					// If one of the panels contains the element matching the hash,
					// make it active on page-load
					if ($panel.length) {
						hash = '#' + $panel.attr('id');
						$defaultTab = plugin.matchTab(hash).parent();
						// Otherwise, make the default tab the one that's active on page-load
					} else {
						$defaultTab = plugin.tabs.parent().find(settings.defaultTab);
						if ($defaultTab.length === 0) {
							$.error("The specified default tab ('" + settings.defaultTab + "') could not be found in the tab set ('" + settings.tabs + "') out of " + plugin.tabs.length + " tabs.");
						}
					}
				}
				$defaultTabLink = $defaultTab.children("a").first();
				activateDefaultTab($selectedTab);
			};
		// Activate defaultTab (or collapse by default), called by setDefaultTab
		var activateDefaultTab = function($selectedTab) {
				var defaultPanel, defaultAjaxUrl;
				if (settings.collapsible && $selectedTab.length === 0 && settings.collapsedByDefault) {
					$defaultTab.addClass(settings.collapsedClass).children().addClass(settings.collapsedClass);
				} else {
					defaultPanel = $($defaultTab.data('easytabs').panel);
					defaultAjaxUrl = $defaultTab.data('easytabs').ajax;
					if (defaultAjaxUrl && (!settings.cache || !$defaultTab.data('easytabs').cached)) {
						$container.trigger('easytabs:ajax:beforeSend', [$defaultTabLink, defaultPanel]);
						defaultPanel.load(defaultAjaxUrl, function(response, status, xhr) {
							$defaultTab.data('easytabs').cached = true;
							$container.trigger('easytabs:ajax:complete', [$defaultTabLink, defaultPanel, response, status, xhr]);
						});
					}
					$defaultTab.data('easytabs').panel.show().addClass(settings.panelActiveClass);
					$defaultTab.addClass(settings.tabActiveClass).children().addClass(settings.tabActiveClass);
				}
				// Fire event when the plugin is initialised
				$container.trigger("easytabs:initialised", [$defaultTabLink, defaultPanel]);
			};
		// Bind tab-select funtionality to namespaced click event, called by
		// init
		var bindToTabClicks = function() {
				plugin.tabs.children("a").bind(settings.bind_str, function(e) {
					// Stop cycling when a tab is clicked
					settings.cycle = false;
					// Hash will be updated when tab is clicked,
					// don't cause tab to re-select when hash-change event is fired
					skipUpdateToHash = false;
					// Select the panel for the clicked tab
					plugin.selectTab($(this));
					// Don't follow the link to the anchor
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
				});
			};
		// Activate a given tab/panel, called from plugin.selectTab:
		//
		//   * fire `easytabs:before` hook
		//   * get ajax if new tab is an uncached ajax tab
		//   * animate out previously-active panel
		//   * fire `easytabs:midTransition` hook
		//   * update URL hash
		//   * animate in newly-active panel
		//   * update CSS classes for inactive and active tabs/panels
		//
		// TODO: This could probably be broken out into many more modular
		// functions
		var activateTab = function($clicked, $targetPanel, ajaxUrl, callback) {
				plugin.panels.stop(true, true);
				if (fire($container, "easytabs:before", [$clicked, $targetPanel, settings])) {
					var $visiblePanel = plugin.panels.filter(":visible"),
						$panelContainer = $targetPanel.parent(),
						targetHeight, visibleHeight, heightDifference, showPanel, hash = window.location.hash.match(/^[^\?]*/)[0];
					if (settings.animate) {
						targetHeight = getHeightForHidden($targetPanel);
						visibleHeight = $visiblePanel.length ? setAndReturnHeight($visiblePanel) : 0;
						heightDifference = targetHeight - visibleHeight;
					}
					// Set lastHash to help indicate if defaultTab should be
					// activated across multiple tab instances.
					lastHash = hash;
					// TODO: Move this function elsewhere
					showPanel = function() {
						// At this point, the previous panel is hidden, and the new one will be selected
						$container.trigger("easytabs:midTransition", [$clicked, $targetPanel, settings]);
						// Gracefully animate between panels of differing heights, start height change animation *after* panel change if panel needs to contract,
						// so that there is no chance of making the visible panel overflowing the height of the target panel
						if (settings.animate && settings.transitionIn == 'fadeIn') {
							if (heightDifference < 0) $panelContainer.animate({
								height: $panelContainer.height() + heightDifference
							}, transitions.halfSpeed).css({
								'min-height': ''
							});
						}
						if (settings.updateHash && !skipUpdateToHash) {
							//window.location = url.toString().replace((url.pathname + hash), (url.pathname + $clicked.attr("href")));
							// Not sure why this behaves so differently, but it's more straight forward and seems to have less side-effects
							window.location.hash = '#' + $targetPanel.attr('id');
						} else {
							skipUpdateToHash = false;
						}
						$targetPanel[transitions.show](transitions.speed, settings.transitionInEasing, function() {
							$panelContainer.css({
								height: '',
								'min-height': ''
							}); // After the transition, unset the height
							$container.trigger("easytabs:after", [$clicked, $targetPanel, settings]);
							// callback only gets called if selectTab actually does something, since it's inside the if block
							if (typeof callback == 'function') {
								callback();
							}
						});
					};
					if (ajaxUrl && (!settings.cache || !$clicked.parent().data('easytabs').cached)) {
						$container.trigger('easytabs:ajax:beforeSend', [$clicked, $targetPanel]);
						$targetPanel.load(ajaxUrl, function(response, status, xhr) {
							$clicked.parent().data('easytabs').cached = true;
							$container.trigger('easytabs:ajax:complete', [$clicked, $targetPanel, response, status, xhr]);
						});
					}
					// Gracefully animate between panels of differing heights, start height change animation *before* panel change if panel needs to expand,
					// so that there is no chance of making the target panel overflowing the height of the visible panel
					if (settings.animate && settings.transitionOut == 'fadeOut') {
						if (heightDifference > 0) {
							$panelContainer.animate({
								height: ($panelContainer.height() + heightDifference)
							}, transitions.halfSpeed);
						} else {
							// Prevent height jumping before height transition is triggered at midTransition
							$panelContainer.css({
								'min-height': $panelContainer.height()
							});
						}
					}
					// Change the active tab *first* to provide immediate feedback when the user clicks
					plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);
					plugin.tabs.filter("." + settings.collapsedClass).removeClass(settings.collapsedClass).children().removeClass(settings.collapsedClass);
					$clicked.parent().addClass(settings.tabActiveClass).children().addClass(settings.tabActiveClass);
					plugin.panels.filter("." + settings.panelActiveClass).removeClass(settings.panelActiveClass);
					$targetPanel.addClass(settings.panelActiveClass);
					if ($visiblePanel.length) {
						$visiblePanel[transitions.hide](transitions.speed, settings.transitionOutEasing, showPanel);
					} else {
						$targetPanel[transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, showPanel);
					}
				}
			};
		// Get heights of panels to enable animation between panels of
		// differing heights, called by activateTab
		var getHeightForHidden = function($targetPanel) {
				if ($targetPanel.data('easytabs') && $targetPanel.data('easytabs').lastHeight) {
					return $targetPanel.data('easytabs').lastHeight;
				}
				// this is the only property easytabs changes, so we need to grab its value on each tab change
				var display = $targetPanel.css('display'),
					outerCloak, height;
				// Workaround with wrapping height, because firefox returns wrong
				// height if element itself has absolute positioning.
				// but try/catch block needed for IE7 and IE8 because they throw
				// an "Unspecified error" when trying to create an element
				// with the css position set.
				try {
					outerCloak = $('<div></div>', {
						'position': 'absolute',
						'visibility': 'hidden',
						'overflow': 'hidden'
					});
				} catch (e) {
					outerCloak = $('<div></div>', {
						'visibility': 'hidden',
						'overflow': 'hidden'
					});
				}
				height = $targetPanel.wrap(outerCloak).css({
					'position': 'relative',
					'visibility': 'hidden',
					'display': 'block'
				}).outerHeight();
				$targetPanel.unwrap();
				// Return element to previous state
				$targetPanel.css({
					position: $targetPanel.data('easytabs').position,
					visibility: $targetPanel.data('easytabs').visibility,
					display: display
				});
				// Cache height
				$targetPanel.data('easytabs').lastHeight = height;
				return height;
			};
		// Since the height of the visible panel may have been manipulated due to interaction,
		// we want to re-cache the visible height on each tab change, called
		// by activateTab
		var setAndReturnHeight = function($visiblePanel) {
				var height = $visiblePanel.outerHeight();
				if ($visiblePanel.data('easytabs')) {
					$visiblePanel.data('easytabs').lastHeight = height;
				} else {
					$visiblePanel.data('easytabs', {
						lastHeight: height
					});
				}
				return height;
			};
		// Setup hash-change callback for forward- and back-button
		// functionality, called by init
		var initHashChange = function() {
				// enabling back-button with jquery.hashchange plugin
				// http://benalman.com/projects/jquery-hashchange-plugin/
				if (typeof $(window).hashchange === 'function') {
					$(window).hashchange(function() {
						plugin.selectTabFromHashChange();
					});
				} else if ($.address && typeof $.address.change === 'function') { // back-button with jquery.address plugin http://www.asual.com/jquery/address/docs/
					$.address.change(function() {
						plugin.selectTabFromHashChange();
					});
				}
			};
		// Begin cycling if set in options, called by init
		var initCycle = function() {
				var tabNumber;
				if (settings.cycle) {
					tabNumber = plugin.tabs.index($defaultTab);
					setTimeout(function() {
						plugin.cycleTabs(tabNumber + 1);
					}, settings.cycle);
				}
			};
		plugin.init();
	};
	$.fn.easytabs = function(options) {
		var args = arguments;
		return this.each(function() {
			var $this = $(this),
				plugin = $this.data('easytabs');
			// Initialization was called with $(el).easytabs( { options } );
			if (undefined === plugin) {
				plugin = new $.easytabs(this, options);
				$this.data('easytabs', plugin);
			}
			// User called public method
			if (plugin.publicMethods[options]) {
				return plugin.publicMethods[options](Array.prototype.slice.call(args, 1));
			}
		});
	};
})(jQuery);
jQuery.fn.equalHeights = function() {
	var a = 0,
		b = jQuery.browser.msie ? "1%" : "auto";
	return this.css("height", b).each(function() {
		a = Math.max(a, this.offsetHeight)
	}).css("height", a).each(function() {
		var c = this.offsetHeight;
		if (c > a) {
			jQuery(this).css("height", a - (c - a))
		}
	})
}; /* Responsive JS */
jQuery(window).load(function() {
	if (matchMedia("only screen and (min-width : 768px)").matches) {
		var a = 0;
		var a = jQuery(".bannerimg").height();
		var b = jQuery(".banner-text").height();
		jQuery(".banner-text").css("margin-top", (a / 2) - (b / 2));
		jQuery('.products').each(function() {
			$('.span8, .price', this).equalHeights();
		});
		$("img.lazy").lazyload({
			effect: 'fadeIn'
		});
	} else {
		jQuery('.products .span8, .price').css('height', 'auto');
		$("img.lazy").lazyload({
			effect: 'fadeIn'
		});
	}
});

	$(window).resize(function( event ) {
		if (matchMedia("only screen and (min-width : 768px)").matches) {
			var a = 0;
			var a = jQuery(".bannerimg").height();
			var b = jQuery(".banner-text").height();
			jQuery(".banner-text").css("margin-top", (a / 2) - (b / 2));
			jQuery('.products .span8, .price').equalHeights();
		} else {
			jQuery('.products .span8, .price').css('height', 'auto');
		}
		$('tr').each(function(index, value) {
			jQuery('td', this).equalHeights();
		});
	});

if (matchMedia("only screen and (max-width : 767px)").matches) {
	$('.maincontent').click(function() {
		$('.nav').slideUp();
	});
}
$('.nav').dcAccordion({
	eventType: 'click',
	autoClose: true,
	saveState: false,
	disableLink: true,
	showCount: false,
	speed: 'slow'
});
$(".grade-button").hover(function() {
	$(this).find(".grade-number").addClass("animated shake")
}, function() {
	$(this).find(".grade-number").removeClass("animated shake")
});
$(".logo").hover(function() {
	$(this).addClass("animated swing")
}, function() {
	$(this).removeClass("animated swing")
});
$(document).ready(function() {
	$("a.smooth").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 20 + "px"
		}, {
			duration: 800,
			easing: "swing"
		});
		return false;
	});
});
$("figure:not(:has(figcaption))").each(function(index, value) {
	$(this).find('.lightbox').addClass('nofigc');
});
jQuery(".lightbox").lightbox();
$('tr').each(function(index, value) {
	jQuery('td', this).equalHeights();
});
$(window).scroll(function() {
	// what is the y position of the scroll?
	var y = $(window).scrollTop();
	// whether that's below the start of article?
	if (y >= 190) {
		// if so, add the fixed class
		$('.navbar').addClass('notattop');
		$('.navbar').removeClass('attop');
	} else {
		// otherwise, remove it
		$('.navbar').addClass('attop');
		$('.navbar').removeClass('notattop');
	}
});
jQuery('.nav-eng').click(

function() {
	$(this).addClass('active');
	$('.nav-afr').removeClass('active');
	$('#afrikaans').slideUp();
	$('#eng').slideDown();
});
jQuery('.nav-afr').click(

function() {
	$(this).addClass('active');
	$('.nav-eng').removeClass('active');
	$('#eng').slideUp();
	$('#afrikaans').slideDown();
});
$(document).ready(function() {
	$('.nav li a').on('click', function(event) {
		window.localStorage['item'] = $(this).parent().attr('id');
	});
	$('.nav-afr').on('click', function(event) {
		window.localStorage['afri'] = 1
	});
	$('.nav-eng').on('click', function(event) {
		window.localStorage['afri'] = 0
	});
	var isafr = window.localStorage['afri'];
	var active = window.localStorage['item'];
	$('#' + active).css('text-decoration', 'underline').parents('ul').slideDown().parents('.nav').addClass('active');
	if (isafr == 1) {
		$('.nav-eng').removeClass('active');
		$('.nav-afr').addClass('active');
		$('#eng').slideUp();
		$('.home-buttons a,.chapter-pix a').each(function() {
			var href = $(this).attr('href').replace('chapter', 'chapter_af');
			$(this).attr('href', href);
		});
	}
});