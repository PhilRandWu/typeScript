/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-01 10:41:25
 * @LastEditTime: 2022-03-01 11:06:14
 * @LastEditors: PhilRandWu
 */
// 位枚举
// 数字枚举

// read write create delete

enum Permissions {
    Read = 1, // 0001
    Write = 2, // 0010
    Create = 4, // 0100
    Delete = 8 // 1000
}

// 组合权限(或运算)
let p: Permissions = Permissions.Read | Permissions.Write; // 位运算 
// 0001
// 0010 

// 0011 只需查看对应权限位是否为1


// 验证权限(且运算)
// p & Permissions.Read

// 0011
// 0001

// 0001

function hasPermissions (target: Permissions, pre: Permissions) {
    return (target & pre) === pre;
}


console.log(hasPermissions(p, Permissions.Read)); // true
console.log(hasPermissions(p, Permissions.Create)); // false




// 删除权限(异或运算)
// 0011 
// 0001

// 0010
// p ^ Permissions.Read

function DeletePermissions (target: Permissions, pre: Permissions) {
    return target ^ pre;
}

p = DeletePermissions(p, Permissions.Read);
console.log(hasPermissions(p, Permissions.Read)); // false
