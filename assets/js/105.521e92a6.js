(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1003:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"数据库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作"}},[a._v("#")]),a._v(" 数据库操作")]),a._v(" "),t("p",[a._v("查看版本号")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("mongod "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--version")]),a._v("\n")])])]),t("p",[a._v("连接数据库")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("mongo\n")])])]),t("p",[a._v("退出")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exit")]),a._v("\n")])])]),t("p",[a._v("查看数据库列表")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("show")]),a._v(" dbs\nadmin   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.000")]),a._v("GB\nconfig  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.000")]),a._v("GB\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("local")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.000")]),a._v("GB\n")])])]),t("p",[a._v("创建数据库(use命名是切换数据库，如果不存在则新建数据库)")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" users\n")])])]),t("p",[a._v("查看当前操作的数据库")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> db\nusers\n")])])]),t("p",[a._v("删除数据库")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('> use users\nswitched to db users\n> db.dropDatabase()\n{ "dropped" : "users", "ok" : 1 }\n')])])]),t("h2",{attrs:{id:"集合操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集合操作"}},[a._v("#")]),a._v(" 集合操作")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> db.createCollection('test')\n{ \"ok\" : 1 }\n")])])]),t("p",[a._v("查看已有集合")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> show collections\ntest\n")])])]),t("p",[a._v("自动创建集合,当你插入一些数据时会自动创建集合")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('> db.students.insertOne({"name":"jack"})\n> show collections\nstudents\n')])])]),t("p",[a._v("删除集合")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 创建aa集合\n> db.createCollection('aa')\n{ \"ok\" : 1 }\n# 删除aa集合\n> db.aa.drop()\ntrue\n")])])]),t("h2",{attrs:{id:"文档操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档操作"}},[a._v("#")]),a._v(" 文档操作")]),a._v(" "),t("p",[a._v("相当于对表里的数据操作")]),a._v(" "),t("h3",{attrs:{id:"插入文档-增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入文档-增"}},[a._v("#")]),a._v(" 插入文档(增)")]),a._v(" "),t("p",[a._v("向文档插入一个或多个文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.insert({name:'孙悟空',age:28,gender:\"男\"});\ndb.stus.insert([\n    {name:'张三',age:28,gender:\"男\"},\n    {name:'李四',age:18,gender:\"男\"}\n])\n")])])]),t("p",[a._v("插入一条数据文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.insertOne({name:'孙悟空',age:28,gender:\"男\"});\n")])])]),t("p",[a._v("插入多条数据")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.insertMany(\n    {name:'张三',age:28,gender:\"男\"},\n    {name:'李四',age:18,gender:\"男\"}\n)\n")])])]),t("h3",{attrs:{id:"修改文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文档"}},[a._v("#")]),a._v(" 修改文档")]),a._v(" "),t("p",[a._v("修改孙悟空的年龄为500")]),a._v(" "),t("p",[a._v("update默认修改第一个符合条件的文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.update({name:'孙悟空'},{$set:{age:'500'}})\ndb.stus.updateOne({name:'孙悟空'},{$set:{age:'500'}})\n")])])]),t("p",[a._v("修改多个符合条件的文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.updateMany({name:'孙悟空'},{$set:{age:'500'}}) \ndb.stus.update({name:'孙悟空'},{$set:{age:'500'}},{multi:true})\n")])])]),t("p",[a._v("删除孙悟空的年龄属性")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('db.stus.update({name:"孙悟空"},{$unset:{age:"66666"}})\n')])])]),t("h3",{attrs:{id:"删除文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文档"}},[a._v("#")]),a._v(" 删除文档")]),a._v(" "),t("p",[a._v("删除姓名为张三的记录")]),a._v(" "),t("p",[a._v("remove删除符合条件所有记录")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.remove({name:'张三'})\n")])])]),t("p",[a._v("只删除第一个")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.remove({name:'张三'},true)\ndb.stus.deleteOne({name:'张三'})\n")])])]),t("p",[a._v("删除多个")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.deleteMany({name:'张三'})\n")])])]),t("p",[a._v("清空集合")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.remove({})\n")])])]),t("h3",{attrs:{id:"查询文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询文档"}},[a._v("#")]),a._v(" 查询文档")]),a._v(" "),t("p",[a._v("插寻所有文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find()\n")])])]),t("p",[a._v("查找名字为张三的文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({name:'张三'})\n")])])]),t("p",[a._v("查找名字为张三年龄18岁的文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({name:'张三',age:'18'})\n")])])]),t("p",[a._v("查找第一个符合条件的文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.findOne({name:'张三'})\n")])])]),t("p",[a._v("查看文档记录数")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find().count()\n")])])]),t("p",[a._v("查询年龄小于20岁的")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({age:{$lt:20}})\n")])])]),t("p",[a._v("查询年龄小于等于18岁的")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({age:{$lte:18}})\n")])])]),t("p",[a._v("查询年龄大于20岁的")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({age:{$gt:20}})\n")])])]),t("p",[a._v("查询年龄大于等于18岁的")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({age:{$gte:18}})\n")])])]),t("p",[a._v("查询年龄不等于20岁的")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({age:{$ne:20}})\n")])])]),t("h3",{attrs:{id:"条件查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件查询"}},[a._v("#")]),a._v(" 条件查询")]),a._v(" "),t("p",[a._v("AND 条件")]),a._v(" "),t("p",[a._v("MongoDB 的 find() 方法可以传入多个键(key)，每个键(key)以逗号隔开。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.col.find({key1:value1, key2:value2})\n")])])]),t("p",[a._v("查找名字为张三年龄18岁的文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({name:'张三',age:'18'})\n")])])]),t("p",[a._v("OR 条件")]),a._v(" "),t("p",[a._v("OR 条件语句使用了关键字 $or")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.col.find(\n   {\n      $or: [\n          {key1: value1}, {key2:value2}\n      ]\n   }\n)\n")])])]),t("p",[a._v("查找名字为张三或年龄20岁的文档")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({$or:[{name:'张三'},{age:20}]})\n")])])]),t("p",[a._v("AND 和 OR 联合使用")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.col.find(\n   {\n      key3:value3,\n      $or: [\n          {key1: value1}, {key2:value2}\n      ]\n   }\n)\n")])])]),t("h2",{attrs:{id:"limit与skip方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit与skip方法"}},[a._v("#")]),a._v(" Limit与Skip方法")]),a._v(" "),t("p",[a._v("limit()方法接受一个数字参数，该参数指定从MongoDB中读取的记录条数。")]),a._v(" "),t("p",[a._v("查询age等于18岁的一条记录")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({age:18}).limit(1)\n")])])]),t("p",[a._v("我们除了可以使用limit()方法来读取指定数量的数据外，还可以使用skip()方法来跳过指定数量的数据。")]),a._v(" "),t("p",[a._v("查询age等于18岁的一条记录，跳过第1条")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({age:18}).limit(1).skip(1)\n")])])]),t("h2",{attrs:{id:"排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[a._v("#")]),a._v(" 排序")]),a._v(" "),t("p",[a._v("sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而 -1 是用于降序排列。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.COLLECTION_NAME.find().sort({KEY:1})\n")])])]),t("p",[a._v("查询所有记录按id升序排序")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find().sort({_id:1})\n")])])]),t("h2",{attrs:{id:"投影"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投影"}},[a._v("#")]),a._v(" 投影")]),a._v(" "),t("p",[a._v("第二参数来设置投影，id默认显示。0不显示，1显示")]),a._v(" "),t("p",[a._v("查询所有只显示姓名")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.stus.find({},{name:1,_id:0})\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);