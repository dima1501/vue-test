<template>
    <div v-if="getUser" :class="$style.user">
        <div :class="$style.userAvatar">
            <AppImage :width="300" :height="300" :image="getUser?.avatar"/>
        </div>
        <div :class="$style.userLine">
            <AppTitle type='h2' :title="getUser?.first_name"/>
        </div>
        <div :class="$style.userLine">
            <AppTitle type='h3' :title="getUser?.last_name"/>
        </div> 
        <div :class="$style.userLine">
            <AppTitle type='h4' :title="`${calculatedAge} years old`"/>
        </div> 
        <div :class="$style.userLine">
            <AppTitle type='h4' :title="getUser?.employment?.title"/>
        </div> 
    </div>
</template>
<script>
import {
  mapGetters,
} from 'vuex';
import { store } from '../store';

import AppImage from './ui/AppImage.vue'
import AppTitle from './ui/AppTitle.vue'

export default {
    store,
    name: 'AppUser',
    components: {
        AppImage,
        AppTitle,
    },
    computed: {
        ...mapGetters([
            'getUser',
        ]),
        calculatedAge: function () {
            const today = new Date();
            const birth = new Date(this.getUser.date_of_birth);
            const month = today.getMonth() - birth.getMonth();

            let age = today.getFullYear() - birth.getFullYear();
            
            if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
                age--;
            }
            return age;
        }
    }
}
</script>
<style lang="scss" module>
.user {
    &Avatar {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(243, 243, 243);
        margin-bottom: 20px;
    }
    &Line {
        margin-bottom: 5px;
        text-align: center;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &Subtitle {
        margin: 0;
        text-align: center;
    }
    &Age {
        text-align: center;
    }
}
</style>