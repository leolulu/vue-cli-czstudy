<template>
    <div>
        <mu-carousel class="carousel" hide-controls transition='fade'>
            <mu-carousel-item v-for='(path,index) in images_path' :key='index'>
                <img :src="path" >
            </mu-carousel-item>
        </mu-carousel>
    </div>
</template>

<script>
import carouselImg1 from '../../assets/images/21001788861476860785.jpg';
import carouselImg2 from '../../assets/images/5770517861379951766.jpg';
import carouselImg3 from '../../assets/images/80753271502455857.jpg';

export default {
    
    data() {
        return {
            images_path: [
                carouselImg1,carouselImg2,carouselImg3,
                'https://pic.xiami.net/images/album/img41/306941/23800111513306941.jpg@4e_1c_100Q_185w_185h',
                'https://pic.xiami.net/images/album/img19/85/58feee9fc6148_4274519_1493102239.jpg@4e_1c_100Q_185w_185h',
                'https://pic.xiami.net/images/album/img15/58915/21027480661497660739.jpg@1e_1c_100Q_185w_185h',
                'https://pic.xiami.net/images/album/img73/214973/1124531524214974.jpg@1e_1c_100Q_185w_185h'
            ]
        }
    },
};
</script>

<style scoped>
.carousel {
    height: 300px;
}
</style>