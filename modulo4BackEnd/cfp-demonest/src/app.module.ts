import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { CalcularController } from './calcular/calcular.controller';
import { CalcularService } from './calcular/calcular.service';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
    'client'),
    }),
  ],
  controllers: [AppController, ProductoController, ClienteController, CalcularController],
  providers: [AppService, ProductoService, ClienteService, CalcularService],
})
export class AppModule {}
