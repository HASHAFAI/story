// مسار الموقع المطلق
var path = require("path");
var HtmlPlugin = require("html-webpack-plugin");
var CssPlugin = require("mini-css-extract-plugin");
var MiniCss = require("optimize-css-assets-webpack-plugin");

// بمجرد تشغيل wepback
module.exports = {
// المدخل
entry:{
    app:"./src/index.js"
},
// المخرج
output:{
    // موقع المجلد
    path: path.join(__dirname,"/dist"),
    publicPath: "",
    // اسم المجلد المراد انشائه
    filename:"main.js"
},
mode:"development",
// استخدام سيرفير ويب باك
devServer:{
// موقع المجلد المراد عرضه
contentBase:path.join(__dirname,"/dist"),
// ال id
port:1239,
// لعرض المجلد
writeToDisk:true,
// لفتح الصفحة تلقائيا
// open:true,
},

module:{
    rules:[
       {
           test:/\.html$/,
           use:[
               {
               loader:"html-loader",
               options:{
                minimize:true,
               },
            },
           ]
       },
       {
           test:/\.css$/,
           use:[
               CssPlugin.loader,
               "css-loader",
           ]
       },
       {
        test: /\.(png|svg|jpe?g|gif)$/,
        use:[
            {
                loader: 'file-loader',
                options: {
                  name:"[name].[ext]",
                  outputPath: 'images',
                },
            }
        ]
      },
    ]
},
plugins:[
new HtmlPlugin({
    // اسم الملف المراد بنائه
    filename:"index.html",
    // مسار الملف الاصلي
    template:"./src/index.html"
}
),
new CssPlugin({
    filename:"css/style.css",
}),
new MiniCss({}),
],
}