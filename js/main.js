var css1 = `
/*
    面试官，你好，我是唐静如，
    只用文字作自我介绍太单调了，
    我用代码来做自我介绍吧，
    首先准备一些样式
*/
    *{transition:all 1s}
    html{
        background-color:#eee;
    }
    #code{
        border:1px solid #aaa;
        padding:16px;
        font-size:16px;
    }
/*下面我想让代码高亮*/
    .token.selector{color:#690;}
    .token.punctuation{color:#999;}
    .token.property{color:#905;}
    .token.comment{color: slategray;}
/*加点3D效果*/
    .wrapper{
        transform:rotate(360deg)
    }
`
var css2 = `
/*接下来我需要一张纸*/
    
    .code-wrapper{
        box-shadow:0 0 10px rgba(0,0,0,0.25);
        width:50%;
        position:fixed;
        left:0;
    }
    .paper-wrapper{
        position:fixed;
        right:0;
        width:50%;
        background-color:#aaa;
    }
    .wrapper{display:flex;}
    .paper-wrapper .content{
        background-color:white;
    }
`

var md = `
#自我介绍

我叫唐静如
1995年5月出生
武汉理工大学毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉HTML CSS JavaScript  

#项目介绍

1、苹果风格轮播
2、自我介绍简历
3、自制画板

#联系方式

QQ xxxxxxxxxxxxxxxx
Email xxxxxxxxxxxxxxxxxxx
手机 xxxxxxxxxxxxx

#联系方式

QQ xxxxxxxxxxxxxxxx
Email xxxxxxxxxxxxxxxxxxx
手机 xxxxxxxxxxxxx

#联系方式

QQ xxxxxxxxxxxxxxxx
Email xxxxxxxxxxxxxxxxxxx
手机 xxxxxxxxxxxxx

#联系方式

QQ xxxxxxxxxxxxxxxx
Email xxxxxxxxxxxxxxxxxxx
手机 xxxxxxxxxxxxx
`
var wrapper = document.querySelector('.wrapper')

writeCode('',css1,()=>{
    createPaper(()=>{
        writeCode(css1,css2,()=>{
            writeMarkdown(md)
        })
    })
})
function writeCode(prefix,code,fn){
    let  n = 0
    let domCode = document.querySelector('#code')
    var clock = setInterval(()=>{
        n+=1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css')
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight
        if(n >= code.length){
            window.clearInterval(clock)
            fn && fn.call()
        }
    },30)
}

function writeMarkdown(markdown,fn){
    let  n = 0
    let domMarkdown = document.querySelector('.content')
    var clock = setInterval(()=>{
        n+=1
        domMarkdown.innerHTML = markdown.substring(0,n)
        domMarkdown.scrollTop = domMarkdown.scrollHeight
        if(n >= markdown.length){
            window.clearInterval(clock)
            fn && fn.call()
        }
    },50)
}

function createPaper(fn){
    var paper = document.createElement('div')
    paper.className = 'paper-wrapper'
    wrapper.appendChild(paper)
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    fn && fn.call()
}