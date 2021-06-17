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
open:true,
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
        //    تحويل ملفات ساس الى سيسس
           test:/\.(sa|sc|c)ss$/,
           use:[
               {
                   loader:CssPlugin.loader,
                   options:{
                       publicPath:"../",
                   },
               },
               "css-loader",
            //    يجب ان يكون اسفل css
               'sass-loader',
           ]
       },
       {
        //    للتعرف على نوع الصور
        test: /\.(png|svg|jpe?g|gif)$/,
        use:[
            {
                loader: 'file-loader',
                options: {
                    // لابقاء نفس اسم الصورة 
                  name:"[name].[ext]",
                //   مجلد الصور
                  outputPath: 'images',
                },
            }
        ]
      },
       {
        //    للتعرف على نوع الخطوط
        test: /\.(sfg|eot|woff|woff2||ttf)$/i,
        use:[
            {
                loader: 'file-loader',
                options: {
                    // لابقاء نفس اسم الخط  
                  name:"[name].[ext]",
                //   مجلد الخطوط 
                  outputPath: 'fonts',
                  esModule:false,
                },
            }
        ]
      },
      {
        //   تحديد المسار المطلق لجيكويري من مكتبت نود
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
            //التعرف على صيغ مكتبت جيكويري 
          exposes: ["$", "jQuery"],
        },
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
//منشئ الصفحة الثانية صفحة المنتج 
new HtmlPlugin({
    filename:"product.html",
    template:"./src/product.html"
}
),
//منشئ الصفحة الثالثة  صفحة السلة 
new HtmlPlugin({
    filename:"checkout.html",
    template:"./src/checkout.html"
}
),
//منشئ الصفحة الرابعة  صفحة اتمام الشراء 
new HtmlPlugin({
    filename:"payment.html",
    template:"./src/payment.html"
}
),
//منشئ الصفحة الخامسة  صفحة البحث المتقدم 
new HtmlPlugin({
    filename:"search.html",
    template:"./src/search.html"
}
),
//nمنشئ الصفحة السادسة  صفحة البحث المتقدم 
new HtmlPlugin({
    filename:"contact.html",
    template:"./src/contact.html"
}
),
new CssPlugin({
    filename:"css/style.css",
}),
new MiniCss({}),
],
}