const fastest = { name: 'FASTEST LABS', investment: 83309, operating: 51, employees: 2, industry: 'Alternative Health Care Services', sub: 'Cryotherapy'}
const degrees = { name: '3 Degrees Infrared Light Therapy', investment: 240500, operating: 75, employees: 3, industry: 'Alternative Health Care Services', sub: 'Medical Testing'}
const arc = { name: 'ARCpoint Labs', investment: 225000, operating: 45, employees: 3, industry: 'Alternative Health Care Services', sub: 'Infrared Light Treatment'}
const chill = { name: 'ChillRx Cryotherapy Franchise', investment: 250000, operating: 101, employees: 2, industry: 'Personal Care Services', sub: 'Cryotherapy'}
const ice = { name: 'ICEBOX Cryotherapy', investment: 305850, operating: 125, employees: 1, industry: 'Alternative Health Care Services', sub:'Medical Testing'}
const prime = { name: 'PRIME IV HYDRATION & WELLNESS', investment: 68000, operating: 200, employees: 3, industry: 'Alternative Health Care Services', sub:'Infrared Light Treatment'}
const pur = { name: 'PUR LIFE MEDICAL', investment: 112000, operating: 40, employees: 2, industry: 'Alternative Health Care Services', sub:'Medical Testing'}
const drip = { name: 'The DRIPBaR', investment: 116300, operating: 15, employees: 1, industry: 'Alternative Health Care Services', sub:'Infrared Light Treatment'}
const unity = { name: 'Unity Road (formerly ONE Cannabis)', investment: 1000000, operating: 251, employees: 4, industry: 'Alternative Health Care Services', sub:'Medical Merijuana'}
const radiator = { name: '1-800 RADIATOR & AC', investment: 300000, operating: 125, employees: 1, industry: 'Automotive', sub:'Driver Training'}
const big = { name: 'BIG O TIRES, LLC', investment: 311000, operating: 200, employees: 3, industry: 'Automotive', sub:'Tires'}
const meineke = { name: 'MEINEKE', investment: 225000, operating: 40, employees: 2, industry: 'Automotive', sub: 'Oil Change'}
const midas = { name: 'MIDAS INTERNATIONAL', investment: 198650, operating: 51, employees: 1, industry: 'Automotive', sub:'Oil Change'}
const transmission = { name: 'MR. TRANSMISSION / MILEX COMPLETE AUTO CARE', investment: 228364, operating: 75, employees: 3, industry: 'Automotive', sub:'Auto Service'}
const tint = { name: 'TINT WORLD', investment: 199950, operating: 45, employees: 2, industry: 'Automotive', sub:'Auto Paint'}
const aamco = { name: 'AAMCO Transmissions', investment: 223600, operating: 101, employees: 1, industry: 'Automotive', sub: 'Auto Service'}
const adv = { name: 'Advanced Maintenance', investment: 150000, operating: 125, employees: 4, industry: 'Automotive', sub: 'Auto Service'}
const star = { name: 'All Star Driver Education', investment: 30000, operating: 200, employees: 9, industry: 'Automotive', sub:'Driver Training'}
const auto = { name: 'Auto-Lab', investment: 130750, operating: 40, employees: 3, industry: 'Automotive', sub:'Auto Service'}
const color = { name: 'Color Glo International', investment: 56300, operating: 15, employees: 2, industry: 'Automotive', sub:'Auto Paint'}
const create = { name: 'Creative Colors International', investment: 79600, operating: 251, employees: 1, industry: 'Automotive', sub:'Auto Paint'}
const drive = { name: 'Drive N Style', investment: 74810, operating: 125, employees: 4, industry: 'Automotive', sub:'Auto Paint'}
const grease = { name: 'Grease Monkey', investment: 175000, operating: 200, employees: 1, industry: 'Automotive', sub:'Auto Service'}
const honest = { name: 'Honest-1 Auto Care', investment: 205650, operating: 40, employees: 6, industry: 'Automotive', sub:'Auto Service'}
const luby = { name: 'Luby Dudes', investment: 99853, operating: 75, employees: 2, industry: 'Automotive', sub:'Oil Change'}
const maaco = { name: 'Maaco', investment: 350000, operating: 45, employees: 1, industry: 'Automotive', sub:'Auto Body'}
const merlin = { name: 'Merlin Complete Auto Care Centers', investment: 236800, operating: 101, employees: 4, industry: 'Automotive', sub:'Auto Service'}
const precision = { name: 'Precision Tune Auto Care', investment: 127000, operating: 125, employees: 1, industry: 'Automotive', sub:'Auto Body'}
const speedee = { name: 'SpeeDee Oil Change and Auto Service', investment: 181770, operating: 200, employees: 3, industry: 'Automotive', sub:'Auto Body'}
const strickland = { name: 'Strickland Brothers 10 Minute Oil Change', investment: 221400, operating: 40, employees: 2, industry: 'Automotive', sub:'Auto Body'}
const tilden = { name: 'Tilden Car Care', investment: 100000, operating: 15, employees: 1, industry: 'Automotive', sub:'Driver Training'}
const victory = { name: 'Victory Lane Quick Oil Change', investment: 120000, operating: 251, employees: 4, industry: 'Automotive', sub:'Driver Training'}
const FRANCHISES = [fastest, degrees, arc, chill, ice, prime, pur, drip, unity, radiator, big, meineke, midas, transmission, tint, aamco, adv, star, auto, color, create, drive, grease, honest, luby, maaco, merlin, precision, speedee, strickland, tilden, victory]
function powersearch(){
  //let result = document.getElementById('result');
  let franchiseArray = FRANCHISES;
  let checks = document.getElementsByClassName('checkboxes'); 
  let str = [];
  for(i = 0; i < checks.length; i++){
    if(checks[i].checked === true){
      str.push(checks[i]);
    }
  }
  if(str.length !== 0){
    franchiseArray = franchiseArray.filter((f) => {
      return f.sub === str[0].name;
    })
  }

  let liqCapital = parseInt(document.getElementById('liq').value) || Infinity
  let operate = parseInt(document.getElementById('operating').value) || Infinity
  let employees = parseInt(document.getElementById('employee').value) || Infinity
  
  franchiseArray = franchiseArray.filter((f) => {
    let em = f.employees <= employees
    let op = f.operating <= operate
    let liq = f.investment <= liqCapital
    return em && op && liq
  })
  franchiseArray.forEach((f) => {
    let row = document.createElement('tr')
    let name = document.createElement('td')
    name.innerHTML = f.name
    row.appendChild(name)
    let liqCap = document.createElement('td')
    liqCap.innerHTML = f.investment
    row.appendChild(liqCap)
    let units = document.createElement('td')
    units.innerHTML = f.operating
    row.appendChild(units)
    let emp = document.createElement('td')
    emp.innerHTML = f.employees
    row.appendChild(emp)
    let industry = document.createElement('td')
    industry.innerHTML = f.industry
    row.appendChild(industry)
    let sub = document.createElement('td')
    sub.innerHTML = f.sub
    row.appendChild(sub)
    document.getElementById('results').appendChild(row)
  })
  body.appendChild(document.getElementById('results'))
  
  

}

