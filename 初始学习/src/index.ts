/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-03 09:38:41
 * @LastEditTime: 2022-03-03 10:18:33
 * @LastEditors: PhilRandWu
 */
class User {
  readonly id: number;
  gender: "男" | "女" = "男";
  pid?: string;

  private ReleaseNumber: number = 0;
  private CeilReleaseNumber: number = 3;
  constructor(public name: string, public age: number) {
    this.id = Math.random();
  }
  publish(title: string) {
    if(this.ReleaseNumber < this.CeilReleaseNumber) {
        console.log('发布一篇文章' + title);
        this.ReleaseNumber ++;
    } else {
        console.log('您今日发布文章已达上限');
    }
  }
}


const user = new User('小米',15);
console.log(user);
user.publish('竞争力');
user.publish('竞争力');
user.publish('竞争力');
user.publish('竞争力');
