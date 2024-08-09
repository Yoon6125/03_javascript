window.onload=function(){
	t=document.getElementById("a");
	function Mob(name,hp,attack,mob_exp,mob_money){
		this.name=name;
		this.hp=hp;
		this.attack=attack;
		this.mob_exp=mob_exp;
		this.mob_money=mob_money;
		this.info = function(){
			dw("["+this.name+""+"("+this.hp+"/"+hp+")"+"]");
		}
		
	
	}
	
	
	function Player(name,hp,attack,current_exp,next_lv_up_exp,level){
		this.name=name;
		this.hp=hp;
		this.attack=attack;
		this.current_exp=current_exp;
		this.next_lv_up_exp=next_lv_up_exp;
		this.level=level;
		this.info = function(){
			dw("["+this.name+""+"("+this.hp+"/"+hp+")"+" LV"+this.level+"]");
		}
	}
	
	function getRandomAttackvalue(attack){
		attack=attack+1;
		var random=Math.floor(Math.random()*attack);
		return random;
	}
	
	function Hp_potion(name,hp,value){
		this.name=name;
		this.hp=hp;
		this.value=value;
		this.use = function(){
			var heal=this.hp;
			return heal;
		}
	}
	
	function Wallet(coin){
		this.coin=coin;
		this.wallet_info= function(){
			dw("["+this.coin+"]");
		}
	}
	
	
	
	
	var orc1= new Mob("오크",100,20,10,10);
	var orc2= new Mob("정예오크",300,40,50,20);
	var orc3= new Mob("오크족장",600,50,100,30);
	hr();
	var p1= new Player("user1",600,50,0,300,1);
	var p2= new Player("user2",6000,50,0,300,1);
	var p3= new Player("user3",1200,600,0,300,1);
	hr();
	var user_money= new Wallet(0);
	
	var healpotion = new Hp_potion("힐링포선",200,3);
	// orc1.info();
	// // br()
	// orc2.info();
	// br()
	orc3.info();
	// br()
	// hr();
	p1.info();
	// br()
	// p2.info();
	// br()
	// p3.info();
	// br()
	
	hr();
	dw("전투 개시!");
	hr();
	
	// p1.hp=p1.hp-orc1.attack;
	// orc1.hp=orc1.hp-p1.attack;
	// p2.hp=p2.hp-orc2.attack;
	// orc2.hp=orc2.hp-p2.attack;
	// p3.hp=p3.hp-orc3.attack;
	// orc3.hp=orc3.hp-p3.attack;
	
	var player_hp_left=p1.hp;
	var mob_hp_left=orc3.hp;
	var exp = p1.current_exp;
	var mob_exp = orc3.mob_exp;
	var userlevel=p1.level;
	var gold_get= user_money.coin;
	var monster_money=orc3.mob_money;
	
	function user_mob_status(){
		orc3.info();
		p1.info();
	}
	
	//전투 알고리즘
	function battle(){
		while(player_hp_left > 0 && mob_hp_left > 0){
			var damage=getRandomAttackvalue(p1.attack);
			hr();
			document.write("오크 족장에게"+damage+"을/를 입혔다!");
			br();
			orc3.hp=orc3.hp-damage;
			if(orc3.hp<=0){
				br();
				dw(orc3.name+"을"+p1.name+"이 처치하였습니다.");
				br();
				//경험치 획득 및 레벨업 구현
				dw("경험치"+mob_exp+"획득");
				p1.current_exp +=mob_exp;
				if(p1.current_exp>=p1.next_lv_up_exp){
					br();
					dw("레벨업!");
					p1.level=p1.level+1;
					br();
					dw("현제 래벨: "+p1.level);
				}
				br();
				dw("골드"+monster_money+"획득");
				user_money.coin +=monster_money;
	
				break;
			}
	
			var mob_damage= getRandomAttackvalue(orc3.attack);
			document.write("user1 이"+mob_damage+"의 피해를 오크족장에게 받았다");
			hr();
			p1.hp=p1.hp-mob_damage;
	
			if(p1.hp<=0){
				br();
				dw(p1.name+"이 사망하였습니다");
				break;
			}
	
			player_hp_left=p1.hp;
			mob_hp_left=orc3.hp;
			br();
			user_mob_status();
	
		}
	}
	
	
	
	
	br();
	battle();
	
	
	// while(player_hp_left > 0 && mob_hp_left > 0){
		
	
	// 	var damage=getRandomAttackvalue(p1.attack);
	// 	br();
	// 	document.write("오크 족장에게"+damage+"을/를 입혔다!");
	// 	orc3.hp=orc3.hp-damage;
	// 	br();
	// 	orc3.info();
	// 	if(orc3.hp<=0){
	// 		br();
	// 		dw(orc3.name+"을"+p1.name+"이 처치하였습니다.");
	// 		break;
	// 	}
	
	
	// 	br();
	// 	var mob_damage= getRandomAttackvalue(orc3.attack);
	// 	br();
	// 	document.write("user1 이"+mob_damage+"의 피해를 오크족장에게 받았다");
	// 	p1.hp=p1.hp-mob_damage;
	// 	br();
	// 	p1.info();
	
	// 	if(p1.hp<=0){
	// 		br();
	// 		dw(p1.name+"이 사망하였습니다");
	// 		break;
	// 	}
	
	
	// 	player_hp_left=p1.hp;
	// 	mob_hp_left=orc3.hp;
	
	// }
	br();
	dw(p1.name+"의 현제 hp: "+p1.hp);
	br();
	dw(p1.name+"은 회복 포션을 사용하였다");
	p1.hp=p1.hp+healpotion.use();//hp 포션 사용 후 p1의 hp에 적용
	br();
	dw(p1.name+"의 현제 hp: "+p1.hp);
	hr();
	p1.info();
	hr();
	user_money.wallet_info();
	// battle();
	// br();
	// dw(p1.name+"의 현제 hp: "+p1.hp);
	// br();
	// dw(p1.name+"은 회복 포션을 사용하였다");
	// p1.hp=p1.hp+healpotion.use();//hp 포션 사용 후 p1의 hp에 적용
	// br();
	// dw(p1.name+"의 현제 hp: "+p1.hp);
	// hr();
	// p1.info();
	
	// battle();
	
	
	
	
	
	
	
	// orc1.info();
	// br()
	// orc2.info();
	// br()
	// orc3.info();
	// br()
	// hr();
	// p1.info();
	// br()
	// p2.info();
	// br()
	// p3.info();
	// br()
};




