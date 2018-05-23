<template>

    <v-data-table
        :headers="headers"
        :items="countries"
        hide-actions
        class="elevation-1"
        
    >
        <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.attributes.name}}</td>
        <td class="text-xs-left">{{ props.item.attributes.capital}}</td>
        <td class="text-xs-left">{{ props.item.attributes.sub_region}}</td>
        <td class="text-xs-left">{{ props.item.attributes.population}}</td>
        <router-link :to="`/countries/${props.item.id}`" tag="td" style="cursor: pointer">Подробнее</router-link>
        </template>
    </v-data-table>
</template>

<script>
import axios from 'axios'
export default {
    props: [
        'subregion'
    ],
    data () {
        return {
            headers: [
                { text: 'name', sortable: false},
                { text: 'capital', sortable: false },
                { text: 'subregion', sortable: false },
                { text: 'population', sortable: false },
                { text: '', sortable: false}
            ],
            fetchedData: []
        }
    },
    created() {
        axios.get('https://api.openfintech.io/v1/countries')
        .then(res => {

            this.fetchedData = res.data.data
        })
    },
    computed: {
        countries() {
            return this.fetchedData.filter(item => {
                return (item.attributes.sub_region.indexOf(this.subregion) !== -1)
            })
        }
    }
}

</script>

<style>

</style>
