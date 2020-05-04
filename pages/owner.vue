<template>
    <div>
        <main class="container-form">
            <el-form>
                <h2 class="title">Añadir un nuevo dueño</h2>
                <el-form-item label="Nombre :">
                    <el-input v-model="name" placeholder="Añade un nombre" clearable></el-input>
                </el-form-item>
                <el-form-item label="Sobre el dueño :">
                    <el-input type="textarea" v-model="about"></el-input>                    
                </el-form-item>

                <h3 class="subtitle">Imagen del dueño</h3>
                <el-form-item class="photos">
                    <el-upload 
                    action="/"
                    list-type="picture-card"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :on-success="onFileSelected"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="Imagenes del producto">
                    </el-dialog>
                </el-form-item>

                <h4 class="">Lista de todos los dueños : </h4>
                <div class="owner">
                    <div class="owner-item" v-for="(owner, index) in owners" :key="owner._id">
                        <span >{{owner.name}}</span>
                        <el-avatar v-if="owner.photo" :src="owner.photo[0]"></el-avatar>
                        <el-avatar v-else src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                    </div>
                </div>

                <el-form-item class="flex-end">
                    <div class="el-button-container">
                        <el-button icon="el-icon-delete-solid">Limpiar</el-button>
                        <el-button @click="addOwner" icon="el-icon-upload">Enviar</el-button>
                    </div>
                </el-form-item>
            </el-form>
            
        </main>
    </div>
</template>

<script src="./owner.ts" lang="ts"></script>

<style lang="scss">
    @import '@/assets/index';
    .owner {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        // margin-bottom: 1rem;
        &-item {
            @extend .tag;
            font-size: .8rem;
            padding: .3rem .5rem;
            @include media-to(small) {
                font-size:1rem;
            }
            .el-avatar {
                width: 2rem;
                height: 2rem;
                @include media-to(small) {
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }
            span {
                margin-left: .5rem;
            }
        }
       
    }
</style>