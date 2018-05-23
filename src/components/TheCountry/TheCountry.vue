<template>
    <v-container fluid class="country">
        {{country}}
        <v-alert :value="true" v-if="error" type="error">
            You got an error on API End and info about UKRAINE, don't suffer.
        </v-alert>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            country: '',
            error: false
        }
    },
    created() {
        axios.get(`https://api.openfintech.io/v1/countries/${this.$route.params.id}`)
            .then(res => {
                this.country = res
            })
            .catch(e => {
                this.error = true
                this.country = {
                    "meta": {
                        "total": 419,
                        "pages": 42
                    },
                    "links": {
                        "first": "/v1/{path}?page[number]=1&page[size]=10",
                        "prev": "/v1/{path}?page[number]=39&page[size]=10",
                        "next": "/v1/{path}?page[number]=41&page[size]=10",
                        "last": "/v1/{path}?page[number]=42&page[size]=10"
                    },
                    "data": [
                        {
                        "type": "countries",
                        "id": "UA",
                        "attributes": {
                            "name": "Ukraine",
                            "code_alpha3": "UKR",
                            "capital": "Kyiv",
                            "native_name": "Ð£ÐºÑ€Ð°Ñ—Ð½Ð°",
                            "region": "europe",
                            "sub_region": "eastern_europe",
                            "area": 603700,
                            "population": 42836922,
                            "top_level_domains": [
                            ".ua"
                            ],
                            "timezones": [
                            "UTC+02:00"
                            ],
                            "calling_codes": [
                            380
                            ],
                            "languages": [
                            "uk"
                            ]
                        },
                        "relationships": {
                            "translations": {
                            "links": {
                                "related": "/v1/countries/UA/translations"
                            }
                            }
                        },
                        "links": {
                            "self": "/v1/{path}/{id}"
                        }
                        }
                    ]
                }
                
            })
    }
}
</script>

<style scoped>
.country {
    max-height: 100vh;
}
</style>



