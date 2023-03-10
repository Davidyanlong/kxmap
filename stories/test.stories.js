import MyMiddleware from './Middleware.vue';
import { storiesOf } from '@storybook/vue3';
import { testList } from './register-demo'


const storyParams = testList

const template = (scriptId)=>()=>({
  components:{MyMiddleware}, 
  template: `<my-middleware code="${scriptId}"/>`
})
const mystory = storiesOf(storyParams.rootPath, module)
storyParams.subMenuList.forEach(item=>{
  mystory.add(item.name,template(item.scriptId))
})