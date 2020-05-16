//#region Imports

import { ApiModelProperty } from '@nestjs/swagger';

import { BaseCrudProxy } from '../../../common/base-crud.proxy';
import { UserEntity } from '../../../typeorm/entities/user.entity';

//#endregion

/**
 * A classe que representa as informações que são enviadas pela API sobre um usuário
 */
export class UserProxy extends BaseCrudProxy {

  /**
   * O e-mail do usuário
   */
  @ApiModelProperty()
  public email: string;

  /**
   * O nome do usuário
   */
  @ApiModelProperty()
  public name: string;

  /**
   * O celular do usuário
   */
  @ApiModelProperty()
  public cellphone: string;

  /**
   * As permissões desse usuário
   */
  @ApiModelProperty()
  public roles: string;

  /**
   * Construtor padrão
   */
  constructor(
    entity: UserEntity,
  ) {
    super(entity);

    this.email = entity.email;
    this.name = entity.name;
    this.cellphone = entity.cellphone;
    this.roles = entity.roles;
  }
}
