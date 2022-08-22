//按需引入必须加花括号且名字一致
import {index} from './index.js'



import  sub from './11.js'

sub()
index()

//引入css
import './style/index.css'
//引入less
import './style/index.less'

//引入图片src
import pic1  from './assets/1.gif'
const img = document.createElement('img')
img.src=pic1
//把照片查到页面
document.body.appendChild(img)

//引入vue
import App from './app.vue'
