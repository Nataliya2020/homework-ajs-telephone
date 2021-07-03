export default class Validator {
  validateTel(tel) {
    if (/^\+7|8[\s(]/.test(tel)) {
      this.tel = tel;
      this.tel = this.tel.replace(/[^\d]/g, '');
      this.tel = this.tel.replace(/\d/, '+7');
      return this.tel;
    } if (/^\+8/.test(tel)) {
      return tel.replace(/[^\d+]/g, '');
    }

    throw new Error('Номер должен начинаться с +7, 8 или +8');
  }
}
