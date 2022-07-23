import { Module, Query } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entitys';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurants.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}
