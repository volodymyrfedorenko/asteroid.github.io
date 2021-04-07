function kinetic_function(){
    p1=Number(kin_p_1.value);
    r1=Number(kin_r_1.value);
    v1=Number(kin_v_1.value*1000);
    m2=Number(kin_m_2.value*1000);
    v2=Number(kin_v_2.value*1000);
    tg=(m2*v2)/(p1*(4/3)*3.14*(r1**3)*v1);
    arctg=Math.atan(tg)*(180/3.14);
    kin_res.innerText='Кут відхилення траєкторії: '+arctg;
}

function gravity_function(){
    r1=Number(gra_r_1.value);
    v1=Number(gra_v_1.value*1000);
    m2=Number(gra_m_2.value*1000);
    d=Number(gra_d.value);
    t=Number(gra_t.value*31536000);
    a=(6.67*(10**(-11))*m2)/((r1+d)*(r1+d));
    tg=(a*t)/(v1);
    arctg=Math.atan(tg)*(180/3.14);
    gra_res.innerText='Кут відхилення траєкторії: '+arctg;
}

function thruster_function(){
    p1=Number(thr_p_1.value);
    r1=Number(thr_r_1.value);
    v1=Number(thr_v_1.value*1000);
    f=Number(thr_f.value*1000000);
    t=Number(thr_t.value);
    tg=(f*t*3)/(v1*4*p1*3.14*(r1**3));
    arctg=Math.atan(tg)*(180/3.14);
    thr_res.innerText='Кут відхилення траєкторії: '+arctg;
}

function sunsail_function(){
    p1=Number(sun_p_1.value);
    r1=Number(sun_r_1.value);
    v1=Number(sun_v_1.value*1000);
    l=Number(sun_l.value);
    t=Number(sun_t.value*31536000);
    tg=(3*8*(10**(-6))*(l**2)*t)/(4*p1*3.14*(r1**3)*v1);
    arctg=Math.atan(tg)*(180/3.14);
    sun_res.innerText='Кут відхилення траєкторії: '+arctg;
}
