<template>
    <div v-if="getBeer" :class="$style.content">
        <div :class="$style.contentTitle">
            <AppTitle type='h2' title="Recommended beer"/>
        </div>
        <div :class="$style.contentSubTitle">
            <AppTitle type='h3' :title="`${getBeer?.brand} - ${getBeer?.name}`"/>
        </div>
        <div :class="$style.contentLine">
            <div :class="$style.contentLineLabel">
                Sort of beer
            </div>
            <div :class="$style.contentLineValue">
                {{getBeer?.style}}
            </div>
        </div>
        <div :class="$style.contentLine">
            <div :class="$style.contentLineLabel">
                Hop
            </div>
            <div :class="$style.contentLineValue">
                {{getBeer?.hop}}
            </div>
        </div>
        <div :class="$style.contentLine">
            <div :class="$style.contentLineLabel">
                Yeast
            </div>
            <div :class="$style.contentLineValue">
                {{getBeer?.yeast}}
            </div>
        </div>
        <div :class="$style.contentLine">
            <div :class="$style.contentLineLabel">
                Malts
            </div>
            <div :class="$style.contentLineValue">
                {{getBeer?.malts}}
            </div>
        </div>
        <div :class="$style.contentLine">
            <div :class="$style.contentLineLabel">
                IBU
            </div>
            <div :class="$style.contentLineValue">
                {{getBeer?.ibu}}
            </div>
        </div>
        <div :class="$style.contentLine">
            <div :class="$style.contentLineLabel">
                Alcohol
            </div>
            <div :class="$style.contentLineValue">
                {{getBeer?.alcohol}}
            </div>
        </div>
        <div :class="$style.contentLine">
            <div :class="$style.contentLineLabel">
                Blg
            </div>
            <div :class="$style.contentLineValue">
                {{getBeer?.blg}}
            </div>
        </div>
    </div>
</template>
<script>
import {
  mapGetters,
} from 'vuex';
import { store } from '../store';

import AppTitle from './ui/AppTitle.vue'

export default {
    store,
    name: 'AppContent',
    components: {
        AppTitle,
    },
    props: {
        beer: Object
    },
    computed: {
        ...mapGetters([
            'getBeer',
        ]),
    }
}
</script>
<style lang="scss" module>
.content {
    &Title {
        margin-bottom: 15px;
    }
    &SubTitle {
        margin-bottom: 30px;
    }
    &Line {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        &:last-child {
            margin-bottom: 0;
        }
        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 15px;
            right: 0;
            height: 1px;
            border-bottom: 1px dashed rgb(148, 148, 148);
        }
        &Label {
            position: relative;
            z-index: 1;
            font-weight: bold;
            flex-shrink: 0;
            font-size: 14px;
            margin-right: auto;
            background-color: #fff;
            padding-right: 5px;
        }
        &Value {
            position: relative;
            z-index: 1;
            font-size: 16px;
            margin-left: auto;
            background-color: #fff;
            padding-left: 5px;
            @media screen and (min-width: 768px) {
                font-size: 18px;
            } 
        }
    }
}
</style>