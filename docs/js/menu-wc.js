'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">SpaceCode - API</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' : 'data-target="#xs-controllers-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' :
                                            'id="xs-controllers-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' : 'data-target="#xs-injectables-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' :
                                        'id="xs-injectables-links-module-AppModule-0e1da950b6f1402e799442e9dd926f28013155ed8f9753d4ea71cbce304d0cb8c4cfc7d1af115661d8191c48dace4b0bff28b647715e75744ff2fbec560d5080"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' : 'data-target="#xs-controllers-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' :
                                            'id="xs-controllers-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' : 'data-target="#xs-injectables-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' :
                                        'id="xs-injectables-links-module-AuthModule-e2d86909606dd6aff06bf16c167778d1d29f5d9395a5f9ed7555a87f3145331e367cd9cf5059fb6e22af6e2e49d8d337720a3a59b265d53c604ee90663a78bdb"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GameModule-fb1885bab03977f3d8ccc516ba5df4e9f31fa6621a7abdf27e8c6665ffae590d0db57fc1fa1def07610e9339c346aface23a5855d2ed367ef0e15c8067a0334d"' : 'data-target="#xs-controllers-links-module-GameModule-fb1885bab03977f3d8ccc516ba5df4e9f31fa6621a7abdf27e8c6665ffae590d0db57fc1fa1def07610e9339c346aface23a5855d2ed367ef0e15c8067a0334d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GameModule-fb1885bab03977f3d8ccc516ba5df4e9f31fa6621a7abdf27e8c6665ffae590d0db57fc1fa1def07610e9339c346aface23a5855d2ed367ef0e15c8067a0334d"' :
                                            'id="xs-controllers-links-module-GameModule-fb1885bab03977f3d8ccc516ba5df4e9f31fa6621a7abdf27e8c6665ffae590d0db57fc1fa1def07610e9339c346aface23a5855d2ed367ef0e15c8067a0334d"' }>
                                            <li class="link">
                                                <a href="controllers/GameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoricGameModule.html" data-type="entity-link" >HistoricGameModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoomModule.html" data-type="entity-link" >RoomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' : 'data-target="#xs-controllers-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' :
                                            'id="xs-controllers-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' }>
                                            <li class="link">
                                                <a href="controllers/RoomController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' : 'data-target="#xs-injectables-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' :
                                        'id="xs-injectables-links-module-RoomModule-dc7e209473115b0bdbd86c663edbe6b395126ca7063d32513d7b74cdc961e2eb2d0178e12007e6d238401ea33f0df9c61f8c54192b9003065a8c1bde90a8d691"' }>
                                        <li class="link">
                                            <a href="injectables/RoomService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TeamModule.html" data-type="entity-link" >TeamModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' : 'data-target="#xs-controllers-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' :
                                            'id="xs-controllers-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' }>
                                            <li class="link">
                                                <a href="controllers/TeamController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' : 'data-target="#xs-injectables-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' :
                                        'id="xs-injectables-links-module-TeamModule-33849a81509c8c3d5fa49851c7a17216aa5456fd1ee7befdc18594053ad02e83e9151f82bb3f16b1cbbd494d0a79842a721e48915e45e591037f5237643b72aa"' }>
                                        <li class="link">
                                            <a href="injectables/TeamService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' : 'data-target="#xs-controllers-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' :
                                            'id="xs-controllers-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' : 'data-target="#xs-injectables-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' :
                                        'id="xs-injectables-links-module-UserModule-50683f54c0f0bc1a05150f5d52e28d9ddaa53edee16b24d81c8ad2c30fbfbae59127812f3d296960897f9b3baf999bdec683199f8a19028e0e23d72e15d9ff83"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Game.html" data-type="entity-link" >Game</a>
                                </li>
                                <li class="link">
                                    <a href="entities/HistoricGame.html" data-type="entity-link" >HistoricGame</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Room.html" data-type="entity-link" >Room</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Team.html" data-type="entity-link" >Team</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddPointDto.html" data-type="entity-link" >AddPointDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadCodeException.html" data-type="entity-link" >BadCodeException</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadResultException.html" data-type="entity-link" >BadResultException</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseMigration1653035270972.html" data-type="entity-link" >BaseMigration1653035270972</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConnectInRoomUserDto.html" data-type="entity-link" >ConnectInRoomUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGuestUserDto.html" data-type="entity-link" >CreateGuestUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoomDto.html" data-type="entity-link" >CreateRoomDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeamDto.html" data-type="entity-link" >CreateTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventGateway.html" data-type="entity-link" >EventGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameDto.html" data-type="entity-link" >GameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameRepository.html" data-type="entity-link" >GameRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/getRoomsFilterDto.html" data-type="entity-link" >getRoomsFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoricGameDto.html" data-type="entity-link" >HistoricGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoricGameRepository.html" data-type="entity-link" >HistoricGameRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoPrintException.html" data-type="entity-link" >NoPrintException</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoomClass.html" data-type="entity-link" >RoomClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoomRepository.html" data-type="entity-link" >RoomRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeamRepository.html" data-type="entity-link" >TeamRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoomModeDto.html" data-type="entity-link" >UpdateRoomModeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPseudoDto.html" data-type="entity-link" >UpdateUserPseudoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserSocketDto.html" data-type="entity-link" >UpdateUserSocketDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserTeamDto.html" data-type="entity-link" >UpdateUserTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PayloadInterface.html" data-type="entity-link" >PayloadInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});