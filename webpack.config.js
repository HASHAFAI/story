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
               {
                   loader:CssPlugin.loader,
                   options:{
                       publicPath:"../",
                   },
               },
               "css-loader",
           ]
       },
       {
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
            // صيغ مكتبت جيكويري
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
new CssPlugin({
    filename:"css/style.css",
}),
new MiniCss({}),
],
}