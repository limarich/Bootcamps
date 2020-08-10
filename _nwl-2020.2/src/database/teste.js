const db = require('./db')
const createProffy = require('./createProffy')
db.then(async (db) => {
    //Inserir dados
    proffyValue  = {
        name : "Carlos Lamark",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStQrr47E453U-zMHB8D6o71v8h9DR-1u_8QA&usqp=CAU",
        whatsapp: "8788375787",
        bio:"Rapz" ,
    }

    classValue = {
        subject: 1,
        cost: "50000",
        //ptoffy id vira pelo db
    }
    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados inseridos
    //proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //classes de determinado proffy
    const selectClassesAndProffys  = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    //   console.log(selectClassesSchedules)
})