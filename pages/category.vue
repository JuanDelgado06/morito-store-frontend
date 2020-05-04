<template>
    <div>
        <main class="container-form">
            <el-form>
                <h2 class="title">Añade una nueva categoria</h2>
                <el-form-item label="Nombre de la categoria :">
                    <el-input v-model="type" placeholder="Añade el nombre de la categoria" clearable></el-input>
                </el-form-item>

                <h4 class="">Categorias Existente</h4>
                <div class="categories">
                    <p class="categories-item" v-for="(cat, index) in categories" :key="cat._id">{{cat.type}}</p>
                </div>

                <el-form-item class="flex-end">
                    <div class="el-button-container">
                        <el-button icon="el-icon-delete-solid" @click="cancelHome">Cancelar</el-button>
                        <el-button @click="addCategory" icon="el-icon-upload">Añadir</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>

<script src="./category.ts" lang="ts"></script>

<style lang="scss">
    @import '@/assets/index';
    .categories {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        &-item {
            @extend .tag;
            font-size: .9rem;
            padding: .5rem 1rem;
        }
    }
</style>