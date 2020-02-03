
const picada = extendContent(Mech, "picada-ship", {
updateAlt: function(player){
player.healBy(Time.delta()* 0.1);
}});

const picadDeath = newEffect(20, e => {
    Draw.color(Color.valueOf("84F491FF"), Color.valueOf("62AE7FFF"), e.fin()); //color goes from white to light gray
    Lines.stroke(e.fout() * 10); //line thickness goes from 3 to 0
    Lines.circle(e.x, e.y, e.fin() * Mathf.random(1,15)); //draw a circle whose radius goes from 0 to 100
});
/*const picadSpawn = newEffect (12, e => {
            Draw.color(Color.valueOf("84F491FF"));
            Lines.stroke(e.fout() * 1.5);

            Angles.randLenVectors(e.id, 8, e.finpow() * 17, e.rotation, 360,does run ( (x, y) => {
                const ang = Mathf.angle (x, y);
                Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
            }));
        });
        */
const picadFragDeath = newEffect(10, e => {
    Draw.color(Color.valueOf("84F491FF"), Color.valueOf("62AE7FFF"), e.fin()); //color goes from white to light gray
    Lines.stroke(e.fout() * 5); //line thickness goes from 3 to 0
    Lines.circle(e.x, e.y, e.fin() * Mathf.random(0.5,7.5)); //draw a circle whose radius goes from 0 to 100
});

const picadFrag = extend(BasicBulletType, {});
picadFrag.speed = 1.5;
picadFrag.damage = 50;
picadFrag.bulletWidth = 3;
picadFrag.bulletHeight = 16;
//picadFrag.shootEffect = picadSpawn;
picadFrag.despawnEffect = picadFragDeath;
picadFrag.knockback = 0.1;
picadFrag.hitShake = 0.02;
picadFrag.frontColor = Color.valueOf("84F491FF");
picadFrag.backColor =  Color.valueOf("62AE7FFF");
const picad = extend(BasicBulletType, {});


picad.speed = 3;
picad.damage = 100;
picad.bulletWidth = 6;
picad.bulletHeight = 32;
//picad.shootEffect = picadSpawn;
picad.despawnEffect = picadDeath;
picad.homingPower = 1;
picad.homingRange = 25;
picad.knockback = 0.1;
picad.hitShake = 0.2;
picad.bulletSprite = "tankx-picad";
picad.frontColor = Color.valueOf("#ffeecc");
picad.fragBullet = picadFrag;

const gun = extendContent(Weapon, "picada-gun", {});
gun.ejectEffect = Fx.hitLancer;
gun.length = 3;
gun.width = 1;
gun.shots = 3;
gun.reload = 65;
gun.bullet = picad;
gun.alternate = true;

picada.weapon = gun;
picada.speed = 0.6;
picada.buildPower = 2.5;
picada.mass = 10;
picada.engineColor = Color.valueOf("#73D188FF");
picada.flying = true;
picada.health = 500;
picada.cellTrnsY = -3;
picada.engineOffset = 7;
