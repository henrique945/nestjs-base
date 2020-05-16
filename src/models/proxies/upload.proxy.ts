import { ApiModelProperty } from '@nestjs/swagger';

export class UploadProxy {

  /**
   * Url da imagem hospedada
   */
  @ApiModelProperty()
  url: string;

  constructor(
    url: { url: string },
  ) {
    this.url = url.url;
  }

}
