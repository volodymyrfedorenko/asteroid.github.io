function kinetic_function(){
    p1=Number(kin_p_1.value);
    r1=Number(kin_r_1.value);
    v1=Number(kin_v_1.value*1000);
    m2=Number(kin_m_2.value*1000);
    v2=Number(kin_v_2.value*1000);
    t=Number(kin_t.value*31536000);
    tg=(m2*v2)/(p1*(4/3)*3.14*(r1**3)*v1);
    arctg=Math.atan(tg)*(180/3.14);
    dist=tg*(v1*t)/1000;
    kin_tg.innerText='Тангенс кута: '+tg;
    kin_arctg.innerText='Кут відхилення траєкторії: '+arctg;
    kin_dist.innerText='Відхилення від кінцевої точки (у км): '+dist;
}

function gravity_function(){
    r1=Number(gra_r_1.value);
    v1=Number(gra_v_1.value*1000);
    m2=Number(gra_m_2.value*1000);
    d=Number(gra_d.value);
    t=Number(gra_t.value*31536000);
    a=(6.67*(10**(-11))*m2)/((r1+d)*(r1+d));
    tg=(a*t)/(v1);
    tg/=2;
    arctg=Math.atan(tg)*(180/3.14);
    dist=tg*(v1*t)/1000;
    gra_tg.innerText='Тангенс кута: '+tg;
    gra_arctg.innerText='Кут відхилення траєкторії: '+arctg;
    gra_dist.innerText='Відхилення від кінцевої точки (у км): '+dist;
}

function thruster_function(){
    p1=Number(thr_p_1.value);
    r1=Number(thr_r_1.value);
    v1=Number(thr_v_1.value*1000);
    f=Number(thr_f.value*1000000);
    t1=Number(thr_t1.value);
    t=Number(thr_t.value*31536000);
    tg=(f*t1*3)/(v1*4*p1*3.14*(r1**3));
    arctg=Math.atan(tg)*(180/3.14);
    dist=tg*(v1*t)/1000;
    thr_tg.innerText='Тангенс кута: '+tg;
    thr_arctg.innerText='Кут відхилення траєкторії: '+arctg;
    thr_dist.innerText='Відхилення від кінцевої точки (у км): '+dist;
}

function sunsail_function(){
    p1=Number(sun_p_1.value);
    r1=Number(sun_r_1.value);
    v1=Number(sun_v_1.value*1000);
    l=Number(sun_l.value);
    t=Number(sun_t.value*31536000);
    tg=(3*8*(10**(-6))*(l**2)*t)/(4*p1*3.14*(r1**3)*v1);
    tg/=2;
    arctg=Math.atan(tg)*(180/3.14);
    dist=tg*(v1*t)/1000;
    sun_tg.innerText='Тангенс кута: '+tg;
    sun_arctg.innerText='Кут відхилення траєкторії: '+arctg;
    sun_dist.innerText='Відхилення від кінцевої точки (у км): '+dist;
}
