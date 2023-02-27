
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash, faFileCirclePlus, faFilePen, faPaw} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserPlus, faUserEdit, faTrash, faFileCirclePlus, faFilePen, faPaw );
Vue.component('font-awesome-icon', FontAwesomeIcon);