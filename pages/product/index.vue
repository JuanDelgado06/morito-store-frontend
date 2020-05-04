<template>
    <div>
        <main class="container-form">
            <el-form >
                <h2 class="title">Añadir un nuevo producto</h2>
                <div class="el-form-layout">
                    <div class="">
                        <el-form-item label="Titulo :">
                            <el-input v-model="title" placeholder="Titulo del Producto" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Descripción :">
                            <el-input type="textarea" placeholder="Descripción del Producto" v-model="description"></el-input>                    
                        </el-form-item>
                    </div>

                    <div class="">
                        <div class="grid-2">
                            <el-form-item label="Precio :">
                                <el-input-number type="number"  v-model="price" placeholder="Precio" :min="1" ></el-input-number>
                            </el-form-item>
                            <el-form-item label="Cantidad :">
                                <el-input-number type="number" v-model="stockQuantity" placeholder="Cantidad" controls-position="right" :min="1" ></el-input-number>
                            </el-form-item>
                        </div>
                        <div class="">
                            <el-form-item label="Dueño :">
                                <el-select v-model="owner" placeholder="Dueño">
                                    <el-option
                                    v-for="item in owners"
                                    :key="item._id"
                                    :label="item.name"
                                    :value="item._id"
                                    >
                                    </el-option>
                                </el-select>                        
                            </el-form-item>
                            <el-form-item label="Categoria :">
                                <el-select v-model="category" placeholder="Categoria">
                                    <el-option
                                    v-for="item in categories"
                                    :key="item._id"
                                    :label="item.type"
                                    :value="item._id"
                                    >
                                    </el-option>
                                </el-select>                        
                            </el-form-item> 
                        </div>
                    </div>
                </div>

                <h3 class="subtitle">Imagenes del Producto</h3>
                <el-form-item class="photos">
                    <el-upload 
                    action="/"
                    list-type="picture-card"
                    multiple
                    :limit="3"
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

                <el-form-item class="flex-end">
                    <div class="el-button-container">
                        <el-button icon="el-icon-delete-solid">Limpiar</el-button>
                        <el-button @click="addProduct" icon="el-icon-upload">Enviar</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>

<script src="./index.ts" lang="ts"></script>