/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-10 09:52:17
 * @LastEditTime: 2022-03-10 10:13:51
 * @LastEditors: PhilRandWu
 */
export type Callback<t,u> = (key:t, value:u) => void;

export class Dictionary<k, v> {
  private _key: k[] = [];
  private _value: v[] = [];

  set(key: k, value: v) {
    const index = this._key.indexOf(key);
    if (index !== -1) {
      this._value[index] = value;
    } else {
      this._key.push(key);
      this._value.push(value);
    }
  }

  get size():number {
      return this._key.length;
  }

  has(key: k) {
    return this._key.includes(key);
  }

  delete(key:k) {
    const index = this._key.indexOf(key);
    if(index === -1) {
        return;
    } else {
        this._key.splice(index, 1);
        this._value.splice(index, 1);
    }
  }

  forEach(callback:Callback<k,v>) {
    this._key.forEach((k,i) => {
        const v = this._value[i];
        callback(k,v);
    })
  }
}
