import IndexPage from '../pages/index.vue'
import DetailPage from '../pages/detail.vue'
import DetailAPage from '../pages/detail/analysis.vue'
import DetailCPage from '../pages/detail/count.vue'
import DetailFPage from '../pages/detail/forecast.vue'
import DetailPPage from '../pages/detail/publish.vue'
import OrderLPage from '../pages/orderList.vue'
export default [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/orderlist',
    component: OrderLPage
  },
  {
    path:'/detail',
    component: DetailPage,
    redirect: '/detail/forecast',
    children: [
      {
        path: 'analysis',
        component: DetailAPage
      },
      {
        path: 'count',
        component: DetailCPage
      },
      {
        path: 'forecast',
        component: DetailFPage
      },
      {
        path: 'publish',
        component: DetailPPage
      }
    ]
  }
]
