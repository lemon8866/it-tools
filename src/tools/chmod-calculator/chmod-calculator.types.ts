export type Scope = '读' | '写' | '执行';
export type Group = '拥有者' | '组' | '公共';

export type GroupPermissions = {
  [k in Scope]: boolean;
};

export type Permissions = {
  [k in Group]: GroupPermissions;
};
