<template>
    <div class="card-product">
        <div class="card-hero">
            <img class="card-img" v-if="product.photo_products.length >= 1" :src="product.photo_products[0]" alt="">
            <img class="card-img" v-else src="~/static/img/image-not-found.png" alt="image not found">
        </div>
                <p class="card-price"> <i class="el-icon-sell"></i> ${{product.price}}</p>
        <div class="card-info">
            <div>
                <h2 class="card-title">{{product.title}}</h2>
                <p>{{product.description}}</p>
            </div>
            <div class="card-starts">
                <el-rate v-model="rating1"></el-rate>
            </div>
            <div class="card-actions flex-end">
                <el-button class="card-actions-button" @click="updateProduct">Actualizar</el-button>
                <el-button class="card-actions-button" @click="deleteProduct">Eliminar</el-button>
            </div>
        </div>
    </div>
</template>

<script src="./cardproduct.ts" lang="ts"></script>