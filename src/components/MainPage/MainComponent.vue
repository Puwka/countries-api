<template>
    <v-container fluid>
        <v-text-field
          id="testing"
          name="input-1"
          label="Subregion"
          v-model="subregion"
        ></v-text-field>
        <CountriesTable :subregion="subregion"></CountriesTable>
    </v-container>
</template>

<script>
import CountriesTable from './CountriesTable'
export default {
    components: {
        CountriesTable
    },
    data() {
        return {
            subregion: ''
        }
    }
}
</script>

<style scoped>

</style>
