<template>
  <div>
    <Loader v-if="loading"/>

    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">{{'Detailed_History' | localize}}</router-link>
        <a @click.prevent class="breadcrumb">
          {{record.type === 'income' ? 'Доход' : 'Расход' | localize}}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card" :class="{
            'red': record.type === 'outcome',
            'green' : record.type === 'income'
          }">
            <div class="card-content white-text">
              <p>{{'Detailed_Description' | localize}}: {{record.description}}</p>
              <p>{{'Detailed_Sum' | localize}}: {{record.amount | currency}}</p>
              <p>{{'Detailed_Category' | localize}}: {{record.categoryName}}</p>

              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="center" v-else>{{'Detailed_Error' | localize}}</p>
  </div>
</template>

<script>
import Loader from '../components/app/Loader.vue'
export default {
  components: { Loader },
  name: 'detail',
  data: () => ({
    record: null,
    loading: true,
  }),
  async mounted() {
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById', id)
    const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)

    this.record = {
      ...record,
      categoryName: category.title
    }

    this.loading = false
  }
}
</script>
