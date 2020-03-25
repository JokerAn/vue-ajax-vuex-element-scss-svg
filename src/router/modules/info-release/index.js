import Layout from '@/views/layout'
export default [
  {
    path: '/info-release',
    redirect: '/info-release/article-management',
    component: Layout,
    meta: {
      title: '信息发布',
      icon: 'el-icon-s-goods'
    },
    children: [
      {
        path: 'article-management',
        component: ()=> import(/* webpackChunkName: "articleManagement" */ '@views/info-release/article-management'),
        meta: {
          title: '文章管理'
        }
      },
      {
        path: 'menu-menagement',
        component: ()=> import(/* webpackChunkName: "menuMenagement" */ '@views/info-release/menu-menagement'),
        meta: {
          title: '栏目管理'
        }
      },
      {
        path: 'label-menagement',
        component: ()=> import(/* webpackChunkName: "labelMenagement" */ '@views/info-release/label-menagement'),
        meta: {
          title: '标签管理'
        }
      },
      {
        path: 'images-menagement',
        component: ()=> import(/* webpackChunkName: "imagesMenagement" */ '@views/info-release/images-menagement'),
        meta: {
          title: '图片管理'
        }
      },
      {
        path: 'course-menagement',
        component: ()=> import(/* webpackChunkName: "courseMenagement" */ '@views/info-release/course-menagement'),
        meta: {
          title: '课程管理'
        }
      }
    ]
  }
]