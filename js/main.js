const complObj = {
    beautiful: 'Ти така чарівна і прекрасна',
    smart: 'Ти розумна і інтелігентна',
    radiant: 'Ти сяєш яскравістю і красою',
    graceful: 'Твоя грація заворожує',
    captivating: 'Ти захоплюєш своєю привабливістю',
    elegant: 'Ти елегантна і стильна',
    stunning: 'Ти неймовірно чарівна',
    enchanting: 'Твоя краса чарує',
    mesmerizing: 'Ти зачаровуєш своїм виглядом',
    alluring: 'Ти манлива і приваблива',
    angelic: 'Ти маєш ангельську красу',
    glamorous: 'Ти гламурна і чудова',
    exquisite: 'Ти вишукана і бездоганна',
    bewitching: 'Ти спокуслива і околицями',
    fascinating: 'Ти цікава і захоплююча',
    adorable: 'Ти неземно мила і прекрасна',
    magnetic: 'Ти маєш магнетичну привабливість',
    lovely: 'Ти прекрасна і приваблива',
    charming: 'Ти чарівна і приваблива',
    irresistible: 'Ти непереборна і неперевершена',
    breathtaking: 'Ти захоплюєш подих',
    gorgeous: 'Ти чудова і вражаюча',
    delicate: 'Ти ніжна і прекрасна',
    dreamy: 'Ти мрійлива і казкова',
    delightful: 'Ти приносиш в радість і веселі моменти',
    unique: 'Ти неповторна і унікальна в своїй красі',
    incredible: 'Твоя краса неймовірна і непередбачувана',
    compliment1: 'Твої очі - справжні шедеври мистецтва',
    compliment2: 'Ти випромінюєш красу, яка розчиняє серця',
    compliment3: 'Ти є втіленням грації та елегантності',
    compliment4: 'Твоє посмішка робить світ яскравішим',
    compliment5: 'Ти приваблюєш увагу, де б не з`явилась',
    compliment6: 'Твоя краса порівнянна зі сходом сонця',
    compliment7: 'Ти маєш неймовірну харизму, що притягує всіх навколо',
    compliment8: 'Твій вигляд викликає палке бажання',
    compliment9: 'Ти - найпрекрасніше чудо в цьому світі',
    compliment10: 'Твоя краса пробуджує почуття, про які ми навіть не здогадуємося',
    compliment11: 'Ти - яскравий алмаз у сірому світі',
    compliment12: 'Твоє обличчя має божественну симетрію',
    compliment13: 'Твоя краса така неповторна, що слова не вистачає',
    compliment14: 'Ти здатна розчулити навіть камінь своєю привабливістю',
    compliment15: 'Ти - магнет для поглядів і захоплення',
    compliment16: 'Твої рухи викликають захват і чарують',
    compliment17: 'Ти - природна красуня, непідвладна часу',
    compliment18: 'Твоє обличчя виражає безмежну ніжність',
    compliment19: 'Твоя краса створена для завоювання світу',
    compliment20: 'Ти - втілення жіночності і вроди'

};

let firstClick = true; // Змінна, яка відстежує перший клік

  function changeText() {
    if (firstClick) {
      document.getElementById("output").innerHTML = getRandomCompliment();
      document.getElementById("btn").innerHTML = "Ще один комплімент від мене";
      firstClick = false;
    } else {
      document.getElementById("output").innerHTML = getRandomCompliment();
    }
  }

  function getRandomCompliment() {
    const keys = Object.keys(complObj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return complObj[randomKey];
  }