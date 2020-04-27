export const academicData = [
    {id:0 , firstname:'Олег', lastname: 'Лісовиченко', recruitment_date:'2019-09-25'},
    {id:1 , firstname:'Генадій', lastname: 'Рябцев', recruitment_date:'2019-09-25'},
    {id:2 , firstname:'Наталя', lastname: 'Корнієнко', recruitment_date:'2019-09-25'},
    {id:3 , firstname:'Владислав', lastname: 'Мамедов', recruitment_date:'2019-09-25'},
    {id:4 , firstname:'Артем', lastname: 'Заворикін', recruitment_date:'2019-09-25'},
    {id:5 , firstname:'Ярослав', lastname: 'Корнага', recruitment_date:'2019-09-25'},
    {id:6 , firstname:'Ірина', lastname: 'Покулита', recruitment_date:'2019-09-25'},
    {id:7 , firstname:'Михайло', lastname: 'Кушлаба', recruitment_date:'2019-09-25'},
    {id:8 , firstname:'Аліна', lastname: 'Курочкіна', recruitment_date:'2019-09-25'},
    {id:9 , firstname:'Alex', lastname: 'Brown', recruitment_date:'2019-09-25'},
    {id:10, firstname:'Ali', lastname: 'Lara', recruitment_date:'2020-09-30'},
    {id:11, firstname:'Bethany', lastname: 'Terry', recruitment_date:'2019-11-10'},
    {id:12, firstname:'Rina', lastname: 'Haney', recruitment_date:'2019-03-10'},
    {id:13, firstname:'Miranda', lastname: 'Trujillo', recruitment_date:'2020-10-25'},
    {id:14, firstname:'Carl', lastname: 'Osborne', recruitment_date:'2020-03-23'},
    {id:15, firstname:'Ursula', lastname: 'Velazquez', recruitment_date:'2020-11-14'},
    {id:16, firstname:'Aspen', lastname: 'Boyd', recruitment_date:'2019-05-22'},
    {id:17, firstname:'Naomi', lastname: 'Clements', recruitment_date:'2019-09-21'},
    {id:18, firstname:'Haley', lastname: 'Larson', recruitment_date:'2020-09-02'},
    {id:19, firstname:'Adena', lastname: 'Cooper', recruitment_date:'2019-02-28'},
]

export const buildingData = [
    {id:0, auditoriesAmount:31, number:1, address:'Mollis Av.'},
    {id:1, auditoriesAmount:32, number:2, address:'Cum Street'},
    {id:2, auditoriesAmount:33, number:3, address:'Proin St.'},
    {id:3, auditoriesAmount:34, number:4, address:'Vitae St.'},
    {id:4, auditoriesAmount:35, number:5, address:'Ave St'},
]

export const auditoriumData = [
    {id:0 , capacity:25, buildingId:0, computersAvailability:'t', number:101},
    {id:5 , capacity:20, buildingId:0, computersAvailability:'t', number:326},
    {id:10, capacity:25, buildingId:0, computersAvailability:'t', number:228},
    {id:15, capacity:20, buildingId:0, computersAvailability:'t', number:103},
    {id:1 , capacity:30, buildingId:1, computersAvailability:'t', number:212},
    {id:6 , capacity:25, buildingId:1, computersAvailability:'t', number:117},
    {id:11, capacity:30, buildingId:1, computersAvailability:'t', number:337},
    {id:16, capacity:25, buildingId:1, computersAvailability:'t', number:202},
    {id:2 , capacity:20, buildingId:2, computersAvailability:'f', number:323},
    {id:7 , capacity:30, buildingId:2, computersAvailability:'f', number:208},
    {id:12, capacity:20, buildingId:2, computersAvailability:'f', number:136},
    {id:17, capacity:30, buildingId:2, computersAvailability:'f', number:311},
    {id:3 , capacity:25, buildingId:3, computersAvailability:'f', number:134},
    {id:8 , capacity:20, buildingId:3, computersAvailability:'f', number:309},
    {id:13, capacity:25, buildingId:3, computersAvailability:'f', number:225},
    {id:18, capacity:20, buildingId:3, computersAvailability:'f', number:120},
    {id:4 , capacity:30, buildingId:4, computersAvailability:'f', number:235},
    {id:9 , capacity:30, buildingId:4, computersAvailability:'t', number:119},
    {id:14, capacity:30, buildingId:4, computersAvailability:'f', number:314},
    {id:19, capacity:30, buildingId:4, computersAvailability:'t', number:230},
]

export const controlTypeData = [
    {id:0, type:'Іспит', description:'decsription'},
    {id:1, type:'Екзамен', description:'decsription'},
    {id:2, type:'Курсова', description:'decsription'},
]

export const departmentTypeData = [
    {id:0, type:'факультет'},
    {id:1, type:'інститут'}
]

export const departmentData = [
    {id:0, title:'ФІОТ', headId:0, departmentTypeId:0},
    {id:1, title:'ІПСА', headId:1, departmentTypeId:1},
    {id:2, title:'ФММ', headId:2, departmentTypeId:0},
    {id:3, title:'ФПМ', headId:3, departmentTypeId:0},
    {id:4, title:'ФТІ', headId:4, departmentTypeId:0},
]

export const hostelData = [
    {id:0, number:8, head:'Тимошенко Н.В.'},
    {id:1, number:10,head:'Смішний Г.Г.'},
    {id:2, number:1, head:'Дорошенко А.К.'},
    {id:3, number:2, head:'Крикун О.В.'},
    {id:4, number:3, head:'Іваненко Н.Р.'},
    {id:5, number:4, head:'Сидоров Н.С.'},
    {id:6, number:5, head:'Міщенко К.В.'},
    {id:7, number:6, head:'Бондаренко М.С.'},
    {id:8, number:7, head:'Біла А.В.'},
    {id:9, number:9, head:'Чорна І.К.'},
]

export const cathedraData = [
    {id:0, title:'ТК', departmentId:0, deanId:0},
    {id:1, title:'ОТ', departmentId:0, deanId:5},
    {id:2, title:'СА', departmentId:1, deanId:1},
    {id:3, title:'ММ', departmentId:1, deanId:6},
    {id:4, title:'КА', departmentId:2, deanId:2},
    {id:5, title:'ШГ', departmentId:2, deanId:7},
    {id:6, title:'БД', departmentId:3, deanId:3},
    {id:7, title:'КН', departmentId:3, deanId:8},
    {id:8, title:'ВС', departmentId:4, deanId:4},
    {id:9, title:'ОП', departmentId:4, deanId:9},
]

export const cathedraEmployeeData = [
    {id:0 , academicId:0 , cathedraId:0},
    {id:1 , academicId:1 , cathedraId:1},
    {id:2 , academicId:2 , cathedraId:2},
    {id:3 , academicId:3 , cathedraId:3},
    {id:4 , academicId:4 , cathedraId:4},
    {id:5 , academicId:5 , cathedraId:0},
    {id:6 , academicId:6 , cathedraId:1},
    {id:7 , academicId:7 , cathedraId:2},
    {id:8 , academicId:8 , cathedraId:3},
    {id:9 , academicId:9 , cathedraId:4},
    {id:10, academicId:10, cathedraId:0},
    {id:11, academicId:11, cathedraId:1},
    {id:12, academicId:12, cathedraId:2},
    {id:13, academicId:13, cathedraId:3},
    {id:14, academicId:14, cathedraId:4},
    {id:15, academicId:15, cathedraId:0},
    {id:16, academicId:16, cathedraId:1},
    {id:17, academicId:17, cathedraId:2},
    {id:18, academicId:18, cathedraId:3},
    {id:19, academicId:19, cathedraId:4},
]

export const disciplineData = [
    {id:0, title:'БД', description:'description'},
    {id:1, title:'ООП', description:'description'},
    {id:2, title:'ЛААГ', description:'description'},
    {id:3, title:'Фізика', description:'description'},
    {id:4, title:'WEB', description:'description'},
    {id:5, title:'ЧМ', description:'description'},
    {id:6, title:'Англійська', description:'description'},
    {id:7, title:'Маркетинг', description:'description'},
    {id:8, title:'Менеджмент', description:'description'},
    {id:9, title:'Історія', description:'description'},
]

export const roomTypeData = [
    {id:0, name:'коридорний', price:560},
    {id:1, name:'блочний', price:700},
]

export const roomData = [
    {id:0, number:1, capacity:3, hostelId:0, roomTypeId:0},
    {id:1, number:1, capacity:4, hostelId:1, roomTypeId:0},
    {id:2, number:1, capacity:4, hostelId:2, roomTypeId:0},
    {id:3, number:2, capacity:4, hostelId:0, roomTypeId:1},
    {id:4, number:2, capacity:3, hostelId:1, roomTypeId:1},
    {id:5, number:2, capacity:4, hostelId:2, roomTypeId:0},
    {id:6, number:3, capacity:4, hostelId:0, roomTypeId:0},
    {id:7, number:3, capacity:4, hostelId:1, roomTypeId:0},
    {id:8, number:3, capacity:3, hostelId:2, roomTypeId:0},
    {id:9, number:4, capacity:4, hostelId:0, roomTypeId:0},
    {id:10, number:4, capacity:3, hostelId:1, roomTypeId:0},
    {id:11, number:4, capacity:4, hostelId:2, roomTypeId:1},
    {id:12, number:5, capacity:4, hostelId:0, roomTypeId:0},
    {id:13, number:5, capacity:4, hostelId:1, roomTypeId:0},
    {id:14, number:5, capacity:3, hostelId:2, roomTypeId:0},
    {id:15, number:6, capacity:4, hostelId:0, roomTypeId:0},
    {id:16, number:6, capacity:4, hostelId:1, roomTypeId:0},
    {id:17, number:6, capacity:4, hostelId:2, roomTypeId:0},
    {id:18, number:7, capacity:3, hostelId:0, roomTypeId:0},
    {id:19, number:7, capacity:4, hostelId:1, roomTypeId:1},
    {id:20, number:7, capacity:3, hostelId:2, roomTypeId:1},
    {id:21, number:8, capacity:4, hostelId:0, roomTypeId:1},
    {id:22, number:8, capacity:4, hostelId:1, roomTypeId:0},
    {id:23, number:8, capacity:4, hostelId:2, roomTypeId:0},
    {id:24, number:9, capacity:3, hostelId:0, roomTypeId:0},
    {id:25, number:9, capacity:4, hostelId:1, roomTypeId:1},
    {id:26, number:9, capacity:4, hostelId:2, roomTypeId:1},
    {id:27, number:10, capacity:4, hostelId:0, roomTypeId:1},
    {id:28, number:10, capacity:3, hostelId:1, roomTypeId:0},
    {id:29, number:10, capacity:4, hostelId:2, roomTypeId:0},
]

export const privelegeData = [
    {id:0, name:'дитина шахтаря', discount:50},
    {id:1, name:'дитина-сирота', discount:100},
    {id:2, name:'дитина учасника АТО', discount:50},
]

export const specialtyData = [
    {id:0, area:12, code:1, title:'ІПЗ'},
    {id:1, area:12, code:2, title:'КН'},
    {id:2, area:12, code:3, title:'КІ'},
    {id:3, area:3, code:3, title:'ММ'},
]

export const scientificProposalData = [
    {id:0, cathedraId:0, specialtyId:0},
    {id:1, cathedraId:1, specialtyId:1},
    {id:2, cathedraId:2, specialtyId:2},
    {id:3, cathedraId:3, specialtyId:2},
    {id:4, cathedraId:4, specialtyId:3},
    {id:5, cathedraId:5, specialtyId:3},
    {id:6, cathedraId:6, specialtyId:0},
    {id:7, cathedraId:7, specialtyId:1},
    {id:8, cathedraId:8, specialtyId:0},
    {id:9, cathedraId:9, specialtyId:2},
]

export const groupData = [
    {id:0, title:'ІТ-71', scientificProposalId:0, curatorId:15},
    {id:1, title:'ІО-71', scientificProposalId:1, curatorId:16},
    {id:2, title:'ПА-71', scientificProposalId:2, curatorId:17},
    {id:3, title:'ПШ-71', scientificProposalId:3, curatorId:18},
    {id:4, title:'МЕ-71', scientificProposalId:4, curatorId:19},
    {id:5, title:'МА-71', scientificProposalId:5, curatorId:10},
    {id:6, title:'ПК-71', scientificProposalId:6, curatorId:11},
    {id:7, title:'ПР-71', scientificProposalId:7, curatorId:12},
    {id:8, title:'ТУ-71', scientificProposalId:8, curatorId:13},
    {id:9, title:'ТВ-71', scientificProposalId:9, curatorId:14},
]

export const studentData = [
    {id:0 , firstname:'Поліна', midlname:'Анатоліївна', lastname:'Сергієнко', hostelNeed:'t', classId:0},
    {id:1 , firstname:'Ірина', midlname:'Анатоліївна', lastname:'Матвійчук', hostelNeed:'t', classId:0},
    {id:2 , firstname:'Володимир', midlname:'Олегович', lastname:'Мазур', hostelNeed:'t', classId:0},
    {id:3 , firstname:'Ганна', midlname:'Віталіївна', lastname:'Руденко', hostelNeed:'f', classId:1},
    {id:4 , firstname:'Назар', midlname:'Богданович', lastname:'Федоренко', hostelNeed:'f', classId:1},
    {id:5 , firstname:'Юлія', midlname:'Петрівна', lastname:'Новак', hostelNeed:'f', classId:1},
    {id:6 , firstname:'Андрій', midlname:'Андрійович', lastname:'Рудий', hostelNeed:'t', classId:2},
    {id:7 , firstname:'Марія', midlname:'Георгіївна', lastname:'Дідович', hostelNeed:'f', classId:2},
    {id:8 , firstname:'Святослав', midlname:'Костянтинович', lastname:'Кавун', hostelNeed:'f', classId:2},
    {id:9 , firstname:'Кирило', midlname:'Семенович', lastname:'Зікратий', hostelNeed:'f', classId:3},
    {id:10, firstname:'Danielle', midlname:'Kitra', lastname:'Gibbs', hostelNeed:'t', classId:3},
    {id:11, firstname:'Tamara', midlname:'Nevada', lastname:'Hoffman', hostelNeed:'t', classId:3},
    {id:12, firstname:'Ezekiel', midlname:'Reuben', lastname:'Stout', hostelNeed:'f', classId:4},
    {id:13, firstname:'Emerson', midlname:'Serina', lastname:'Mccoy', hostelNeed:'f', classId:4},
    {id:14, firstname:'Burke', midlname:'Wyoming', lastname:'Trujillo', hostelNeed:'f', classId:4},
    {id:15, firstname:'Jonah', midlname:'Geraldine', lastname:'Mayo', hostelNeed:'f', classId:5},
    {id:16, firstname:'Zeus', midlname:'Brooke', lastname:'Snider', hostelNeed:'f', classId:5},
    {id:17, firstname:'Breanna', midlname:'Channing', lastname:'Mcgowan', hostelNeed:'f', classId:5},
    {id:18, firstname:'Lacy', midlname:'Lucas', lastname:'Mullen', hostelNeed:'t', classId:6},
    {id:19, firstname:'Veda', midlname:'Brennan', lastname:'Lancaster', hostelNeed:'f', classId:6},
    {id:20, firstname:'Reece', midlname:'Devin', lastname:'Maynard', hostelNeed:'f', classId:6},
    {id:21, firstname:'Irene', midlname:'Miriam', lastname:'Howe', hostelNeed:'f', classId:7},
    {id:22, firstname:'Eagan', midlname:'Phoebe', lastname:'Weiss', hostelNeed:'f', classId:7},
    {id:23, firstname:'Sade', midlname:'Aaron', lastname:'Pope', hostelNeed:'t', classId:7},
    {id:24, firstname:'Vaughan', midlname:'Chester', lastname:'Ramsey', hostelNeed:'t', classId:8},
    {id:25, firstname:'Wylie', midlname:'Kato', lastname:'Hart', hostelNeed:'t', classId:8},
    {id:26, firstname:'Glenna', midlname:'Cally', lastname:'Vang', hostelNeed:'f', classId:8},
    {id:27, firstname:'Hedda', midlname:'Lance', lastname:'Melendez', hostelNeed:'f', classId:9},
    {id:28, firstname:'Kelly', midlname:'Kevyn', lastname:'Cooper', hostelNeed:'t', classId:9},
    {id:29, firstname:'Zorita', midlname:'Drew', lastname:'Rose', hostelNeed:'t', classId:9},
]

export const inventoryData = [
    {id:0, name:'матрац', count:1030},
    {id:1, name:'покривало', count:1025},
    {id:2, name:'ковдра', count:1118},
    {id:3, name:'подушка', count:1093},
    {id:4, name:'постільна білизна', count:1061},
    {id:5, name:'стілець', count:1136},
    {id:6, name:'полиця', count:1188},
    {id:7, name:'стіл', count:1033},
    {id:8, name:'тумба', count:1022},
    {id:9, name:'шафа', count:1054},
]

export const hostelResidentData = [
    {id:0, studentId:0, roomId:0, privelegeId:null},
    {id:1, studentId:1, roomId:0, privelegeId:null},
    {id:2, studentId:2, roomId:6, privelegeId:null},
    {id:3, studentId:3, roomId:1, privelegeId:null},
    {id:4, studentId:4, roomId:4, privelegeId:null},
    {id:5, studentId:5, roomId:10, privelegeId:null},
    {id:6, studentId:6, roomId:2, privelegeId:0},
    {id:7, studentId:7, roomId:5, privelegeId:1},
    {id:8, studentId:8, roomId:8, privelegeId:2},
    {id:9, studentId:9, roomId:10, privelegeId:0},
]

export const chequeData = [
    {id:0 , paymentDate:'2019-09-01', sum:1400, startDate:'2019-09-01', endDate:'2019-11-30',hostelResidentId:0},
    {id:1 , paymentDate:'2019-09-02', sum:2000, startDate:'2019-09-01', endDate:'2019-11-30',hostelResidentId:1},
    {id:2 , paymentDate:'2019-09-13', sum:1500, startDate:'2019-09-01', endDate:'2019-11-30',hostelResidentId:2},
    {id:3 , paymentDate:'2019-09-29', sum:400, startDate:'2019-09-01', endDate:'2019-09-31',hostelResidentId:3},
    {id:4 , paymentDate:'2019-10-01', sum:600, startDate:'2019-09-01', endDate:'2019-09-31',hostelResidentId:4},
    {id:5 , paymentDate:'2019-10-07', sum:900, startDate:'2019-09-01', endDate:'2019-09-31',hostelResidentId:5},
    {id:6 , paymentDate:'2019-10-07', sum:5000, startDate:'2019-09-01', endDate:'2019-12-31',hostelResidentId:6},
    {id:7 , paymentDate:'2019-10-20', sum:250, startDate:'2019-09-01', endDate:'2019-09-31',hostelResidentId:7},
    {id:8 , paymentDate:'2019-11-06', sum:600, startDate:'2019-09-01', endDate:'2019-09-31',hostelResidentId:8},
    {id:9 , paymentDate:'2019-11-13', sum:240, startDate:'2019-09-01', endDate:'2019-09-31',hostelResidentId:9},
    {id:10, paymentDate:'2019-11-17', sum:700, startDate:'2019-11-01', endDate:'2019-12-31',hostelResidentId:0},
    {id:11, paymentDate:'2019-11-30', sum:300, startDate:'2019-11-01', endDate:'2019-12-31',hostelResidentId:1},
    {id:12, paymentDate:'2019-12-01', sum:2000, startDate:'2019-10-01', endDate:'2019-12-31',hostelResidentId:7},
    {id:13, paymentDate:'2019-12-03', sum:400, startDate:'2019-11-01', endDate:'2019-12-31',hostelResidentId:2},
    {id:14, paymentDate:'2019-12-05', sum:600, startDate:'2019-10-01', endDate:'2019-10-31',hostelResidentId:8},
    {id:15, paymentDate:'2019-12-06', sum:400, startDate:'2019-11-01', endDate:'2019-11-30',hostelResidentId:8},
    {id:16, paymentDate:'2019-12-06', sum:900, startDate:'2019-10-01', endDate:'2019-10-31',hostelResidentId:4},
    {id:17, paymentDate:'2019-12-07', sum:1000, startDate:'2019-11-01', endDate:'2019-11-30',hostelResidentId:4},
    {id:18, paymentDate:'2019-12-10', sum:500, startDate:'2019-10-01', endDate:'2019-10-31',hostelResidentId:3},
    {id:19, paymentDate:'2019-12-11', sum:500, startDate:'2019-11-01', endDate:'2019-11-30',hostelResidentId:3},
]

export const subjectTeachingData = [
    {id:0, basicDiscipline:'t',disciplineId:0,cathedraEmployeeId:0, classId:0, controlTypeId:1},
    {id:1, basicDiscipline:'t',disciplineId:1,cathedraEmployeeId:1, classId:1, controlTypeId:1},
    {id:2, basicDiscipline:'t',disciplineId:2,cathedraEmployeeId:2, classId:2, controlTypeId:1},
    {id:3, basicDiscipline:'t',disciplineId:3,cathedraEmployeeId:3, classId:3, controlTypeId:0},
    {id:4, basicDiscipline:'t',disciplineId:4,cathedraEmployeeId:4, classId:4, controlTypeId:0},
    {id:5, basicDiscipline:'t',disciplineId:5,cathedraEmployeeId:5, classId:5, controlTypeId:0},
    {id:6, basicDiscipline:'t',disciplineId:6,cathedraEmployeeId:6, classId:6, controlTypeId:1},
    {id:7, basicDiscipline:'t',disciplineId:7,cathedraEmployeeId:7, classId:7, controlTypeId:1},
    {id:8, basicDiscipline:'t',disciplineId:8,cathedraEmployeeId:8, classId:8, controlTypeId:1},
    {id:9, basicDiscipline:'t',disciplineId:9,cathedraEmployeeId:9, classId:9, controlTypeId:1},
    {id:10, basicDiscipline:'t',disciplineId:0,cathedraEmployeeId:10, classId:0, controlTypeId:1},
    {id:11, basicDiscipline:'t',disciplineId:1,cathedraEmployeeId:11, classId:1, controlTypeId:0},
    {id:12, basicDiscipline:'t',disciplineId:2,cathedraEmployeeId:12, classId:2, controlTypeId:0},
    {id:13, basicDiscipline:'t',disciplineId:3,cathedraEmployeeId:13, classId:3, controlTypeId:0},
    {id:14, basicDiscipline:'t',disciplineId:4,cathedraEmployeeId:14, classId:4, controlTypeId:1},
    {id:15, basicDiscipline:'t',disciplineId:5,cathedraEmployeeId:15, classId:5, controlTypeId:1},
    {id:16, basicDiscipline:'t',disciplineId:6,cathedraEmployeeId:16, classId:6, controlTypeId:1},
    {id:17, basicDiscipline:'t',disciplineId:7,cathedraEmployeeId:17, classId:7, controlTypeId:0},
    {id:18, basicDiscipline:'t',disciplineId:8,cathedraEmployeeId:18, classId:8, controlTypeId:1},
    {id:19, basicDiscipline:'t',disciplineId:9,cathedraEmployeeId:19, classId:9, controlTypeId:0},
    {id:20, basicDiscipline:'t',disciplineId:0,cathedraEmployeeId:10, classId:0, controlTypeId:1},
    {id:21, basicDiscipline:'t',disciplineId:1,cathedraEmployeeId:11, classId:1, controlTypeId:1},
    {id:22, basicDiscipline:'t',disciplineId:2,cathedraEmployeeId:12, classId:2, controlTypeId:1},
    {id:23, basicDiscipline:'t',disciplineId:3,cathedraEmployeeId:13, classId:3, controlTypeId:0},
    {id:24, basicDiscipline:'t',disciplineId:4,cathedraEmployeeId:14, classId:4, controlTypeId:0},
    {id:25, basicDiscipline:'t',disciplineId:5,cathedraEmployeeId:15, classId:5, controlTypeId:1},
    {id:26, basicDiscipline:'t',disciplineId:6,cathedraEmployeeId:16, classId:6, controlTypeId:1},
    {id:27, basicDiscipline:'t',disciplineId:7,cathedraEmployeeId:17, classId:7, controlTypeId:1},
    {id:28, basicDiscipline:'t',disciplineId:8,cathedraEmployeeId:18, classId:8, controlTypeId:1},
    {id:29, basicDiscipline:'t',disciplineId:9,cathedraEmployeeId:19, classId:9, controlTypeId:1},
]

export const lessonData = [
    {id:0, subjectTeachingId:0,day:'mon',time:'08:30:00',auditoriumId:0},
    {id:1, subjectTeachingId:1,day:'tue',time:'10:25:00',auditoriumId:5},
    {id:2, subjectTeachingId:2,day:'wed',time:'12:20:00',auditoriumId:10},
    {id:3, subjectTeachingId:3,day:'thu',time:'14:15:00',auditoriumId:15},
    {id:4, subjectTeachingId:4,day:'fri',time:'16:10:00',auditoriumId:1},
    {id:5, subjectTeachingId:5,day:'mon',time:'08:30:00',auditoriumId:6},
    {id:6, subjectTeachingId:6,day:'tue',time:'10:25:00',auditoriumId:11},
    {id:7, subjectTeachingId:7,day:'wed',time:'12:20:00',auditoriumId:16},
    {id:8, subjectTeachingId:8,day:'thu',time:'14:15:00',auditoriumId:2},
    {id:9, subjectTeachingId:9,day:'fri',time:'16:10:00',auditoriumId:7},
    {id:10, subjectTeachingId:10,day:'mon',time:'08:30:00',auditoriumId:12},
    {id:11, subjectTeachingId:11,day:'tue',time:'10:25:00',auditoriumId:17},
    {id:12, subjectTeachingId:12,day:'wed',time:'12:20:00',auditoriumId:3},
    {id:13, subjectTeachingId:13,day:'thu',time:'14:15:00',auditoriumId:8},
    {id:14, subjectTeachingId:14,day:'fri',time:'16:10:00',auditoriumId:13},
    {id:15, subjectTeachingId:15,day:'mon',time:'08:30:00',auditoriumId:18},
    {id:16, subjectTeachingId:16,day:'tue',time:'10:25:00',auditoriumId:4},
    {id:17, subjectTeachingId:17,day:'wed',time:'12:20:00',auditoriumId:9},
    {id:18, subjectTeachingId:18,day:'thu',time:'14:15:00',auditoriumId:14},
    {id:19, subjectTeachingId:19,day:'fri',time:'16:10:00',auditoriumId:19},
    {id:20, subjectTeachingId:20,day:'mon',time:'08:30:00',auditoriumId:0},
    {id:21, subjectTeachingId:21,day:'tue',time:'10:25:00',auditoriumId:5},
    {id:22, subjectTeachingId:22,day:'wed',time:'12:20:00',auditoriumId:10},
    {id:23, subjectTeachingId:23,day:'thu',time:'14:15:00',auditoriumId:15},
    {id:24, subjectTeachingId:24,day:'fri',time:'16:10:00',auditoriumId:1},
    {id:25, subjectTeachingId:25,day:'mon',time:'08:30:00',auditoriumId:6},
    {id:26, subjectTeachingId:26,day:'tue',time:'10:25:00',auditoriumId:11},
    {id:27, subjectTeachingId:27,day:'wed',time:'12:20:00',auditoriumId:16},
    {id:28, subjectTeachingId:28,day:'thu',time:'14:15:00',auditoriumId:2},
    {id:29, subjectTeachingId:29,day:'fri',time:'16:10:00',auditoriumId:7},
    {id:30, subjectTeachingId:0,day:'mon',time:'10:25:00',auditoriumId:12},
    {id:31, subjectTeachingId:1,day:'tue',time:'12:20:00',auditoriumId:17},
    {id:32, subjectTeachingId:2,day:'wed',time:'14:15:00',auditoriumId:3},
    {id:33, subjectTeachingId:3,day:'thu',time:'16:10:00',auditoriumId:8},
    {id:34, subjectTeachingId:4,day:'fri',time:'08:30:00',auditoriumId:13},
    {id:35, subjectTeachingId:5,day:'mon',time:'10:25:00',auditoriumId:18},
    {id:36, subjectTeachingId:6,day:'tue',time:'12:20:00',auditoriumId:4},
    {id:37, subjectTeachingId:7,day:'wed',time:'14:15:00',auditoriumId:9},
    {id:38, subjectTeachingId:8,day:'thu',time:'16:10:00',auditoriumId:14},
    {id:39, subjectTeachingId:9,day:'fri',time:'08:30:00',auditoriumId:19},
    {id:40, subjectTeachingId:10,day:'mon',time:'10:25:00',auditoriumId:0},
    {id:41, subjectTeachingId:11,day:'tue',time:'12:20:00',auditoriumId:5},
    {id:42, subjectTeachingId:12,day:'wed',time:'14:15:00',auditoriumId:10},
    {id:43, subjectTeachingId:13,day:'thu',time:'16:10:00',auditoriumId:15},
    {id:44, subjectTeachingId:14,day:'fri',time:'08:30:00',auditoriumId:1},
    {id:45, subjectTeachingId:15,day:'mon',time:'10:25:00',auditoriumId:6},
    {id:46, subjectTeachingId:16,day:'tue',time:'12:20:00',auditoriumId:11},
    {id:47, subjectTeachingId:17,day:'wed',time:'14:15:00',auditoriumId:16},
    {id:48, subjectTeachingId:18,day:'thu',time:'16:10:00',auditoriumId:2},
    {id:49, subjectTeachingId:19,day:'fri',time:'08:30:00',auditoriumId:7},
    {id:50, subjectTeachingId:20,day:'mon',time:'10:25:00',auditoriumId:12},
    {id:51, subjectTeachingId:21,day:'tue',time:'12:20:00',auditoriumId:17},
    {id:52, subjectTeachingId:22,day:'wed',time:'14:15:00',auditoriumId:3},
    {id:53, subjectTeachingId:23,day:'thu',time:'16:10:00',auditoriumId:8},
    {id:54, subjectTeachingId:24,day:'fri',time:'08:30:00',auditoriumId:13},
    {id:55, subjectTeachingId:25,day:'mon',time:'10:25:00',auditoriumId:18},
    {id:56, subjectTeachingId:26,day:'tue',time:'12:20:00',auditoriumId:4},
    {id:57, subjectTeachingId:27,day:'wed',time:'14:15:00',auditoriumId:9},
    {id:58, subjectTeachingId:28,day:'thu',time:'16:10:00',auditoriumId:14},
    {id:59, subjectTeachingId:29,day:'fri',time:'08:30:00',auditoriumId:19},
]

export const doInventoryData = [
    {id:0, date:'2019-08-27', inventoryId:0, hostelResidentId:0},
    {id:1, date:'2019-08-28', inventoryId:1, hostelResidentId:1},
    {id:2, date:'2019-08-29', inventoryId:2, hostelResidentId:2},
    {id:3, date:'2019-08-30', inventoryId:3, hostelResidentId:3},
    {id:4, date:'2019-08-29', inventoryId:4, hostelResidentId:4},
    {id:5, date:'2019-08-28', inventoryId:5, hostelResidentId:5},
    {id:6, date:'2019-08-27', inventoryId:6, hostelResidentId:6},
    {id:7, date:'2019-08-30', inventoryId:7, hostelResidentId:7},
    {id:8, date:'2019-08-30', inventoryId:8, hostelResidentId:8},
    {id:9, date:'2019-08-28', inventoryId:9, hostelResidentId:9},
]

export const examData = [
    {id:0, mark:100, studentId:9, subjectTeachingId:3, auditoriumId:0},
    {id:1, mark:98, studentId:12, subjectTeachingId:4, auditoriumId:5},
    {id:2, mark:76, studentId:15, subjectTeachingId:5, auditoriumId:10},
    {id:3, mark:89, studentId:3, subjectTeachingId:11, auditoriumId:15},
    {id:4, mark:67, studentId:6, subjectTeachingId:12, auditoriumId:1},
    {id:5, mark:100, studentId:9, subjectTeachingId:13, auditoriumId:6},
    {id:6, mark:64, studentId:21, subjectTeachingId:17, auditoriumId:11},
    {id:7, mark:98, studentId:27, subjectTeachingId:19, auditoriumId:16},
    {id:8, mark:82, studentId:9, subjectTeachingId:23, auditoriumId:2},
    {id:9, mark:95, studentId:12, subjectTeachingId:24, auditoriumId:7},
    {id:10, mark:75, studentId:10, subjectTeachingId:3, auditoriumId:0},
    {id:11, mark:91, studentId:13, subjectTeachingId:4, auditoriumId:5},
    {id:12, mark:60, studentId:16, subjectTeachingId:5, auditoriumId:10},
    {id:13, mark:83, studentId:4, subjectTeachingId:11, auditoriumId:15},
    {id:14, mark:90, studentId:7, subjectTeachingId:12, auditoriumId:1},
    {id:15, mark:100, studentId:10, subjectTeachingId:13, auditoriumId:6},
    {id:16, mark:99, studentId:22, subjectTeachingId:17, auditoriumId:11},
    {id:17, mark:65, studentId:28, subjectTeachingId:19, auditoriumId:16},
    {id:18, mark:98, studentId:10, subjectTeachingId:23, auditoriumId:2},
    {id:19, mark:67, studentId:13, subjectTeachingId:24, auditoriumId:7},
    {id:20, mark:100, studentId:11, subjectTeachingId:3, auditoriumId:0},
    {id:21, mark:64, studentId:14, subjectTeachingId:4, auditoriumId:5},
    {id:22, mark:98, studentId:17, subjectTeachingId:5, auditoriumId:10},
    {id:23, mark:82, studentId:5, subjectTeachingId:11, auditoriumId:15},
    {id:24, mark:60, studentId:8, subjectTeachingId:12, auditoriumId:1},
    {id:25, mark:83, studentId:11, subjectTeachingId:13, auditoriumId:6},
    {id:26, mark:90, studentId:23, subjectTeachingId:17, auditoriumId:11},
    {id:27, mark:100, studentId:29, subjectTeachingId:19, auditoriumId:16},
    {id:28, mark:99, studentId:11, subjectTeachingId:23, auditoriumId:2},
    {id:29, mark:65, studentId:14, subjectTeachingId:24, auditoriumId:7},
]
