<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>{{'History_Sum' | localize}}</th>
        <th>{{'History_Date' | localize}}</th>
        <th>{{'History_Category' | localize}}</th>
        <th>{{'History_Type' | localize}}</th>
        <th>{{'History_Open' | localize}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, idx) of records" :key="record.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ record.amount | currency("RUB") }}</td>
        <td>{{ record.date | date("datetime") }}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span class="white-text badge" :class="[record.typeClass]">{{
            record.typeText | localize
          }}</span>
        </td>
        <td>
          <button
            v-tooltip="'Посмотреть запись'"
            class="btn-small btn"
            @click="$router.push('/detail/' + record.id)"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    records: {
      required: true,
      type: Array,
    },
  },
};
</script>
