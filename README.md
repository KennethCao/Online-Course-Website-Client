## 前台项目实操

### 一、创建仓库
> - 仓库地址：git@github.com:KennethCao/Online-Course-Website-Client.git

### 二. 创建项目开发的文件组织结构
> 创建依据: 梳理的开发思路

- **src**: `开发时, 使用的文件夹`
    - **assets**: `资源文件夹`
        - **images**: `存放图片`
        - **fonts**: `存放字体文件`
        - ... ...

    - **components** : `存放各个组件`
        - **01-首页导航栏**: `组件名文件夹`
            - index.html
            - index.less
        - **02-首页轮播图**: `组件名文件夹`
            - index.html
            - index.less
        - ... ...

    - **pages**: `存放由组件拼装的页面`
        - **home**: `页面名称`
            - index.html
            - index.less
        - ... ...

- **dist**: `发布时, 使用的文件夹`

