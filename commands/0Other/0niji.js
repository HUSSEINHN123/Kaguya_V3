import axios from "axios";
import fs from "fs";
import path from "path";

const animeImageLinks = [

"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/sonichedgehog2_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7ef874ec7cf4966dcc718f06e04bd538_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/nobody_xlg_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/uncharted_s270z86d_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/sing-2_d9y6lyxf_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/dune_axfdsg2v_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/acd369d0dfac5a1df9810fd86ddc6096_1dd0870e-13a4-4c86-936a-0d093dde5a75_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f67fd131f234eab2ad3b258427f7f7c8_05171e7c-50bc-4a51-9539-5d93ed97e951_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/52ce74fa06e48364fa27c05df0afdb25_f78be9da-ab3e-4c0f-800a-0515c037a11b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/770b31fb605aed904377be7c0ad16c6b_70eecec3-5da6-4f88-81a5-ad865b30b279_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/770b31fb605aed904377be7c0ad16c6b_70eecec3-5da6-4f88-81a5-ad865b30b279_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/04fb6354e5859db820e71a44f9047463_bbe0ecab-9f6c-4fa3-993a-c11f3191f241_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/46b9d1862bcfd8324dfa7c17da9bb54a_2c45b45d-8f17-4e93-a0e9-3994159ab636_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ambulance_hadvlyai_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/moon_ver2_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/222e73ae081ff5ed5aa0b6c4f2cd62cc_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/61c777f3a3579e0a0bf7b188a5396ad9_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7c2c5dbacea2235f8bf9af4bb597b133_19ff0a29-83ed-431d-8b16-5ea45e85f047_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ffbb97eb3f1c708d394569306e9b3e3f_95e1af14-25ae-41eb-b916-3ae313e0daea_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/fdb4b1f4bf6573fdaacc475bde752337_ed80f26f-fd7f-4692-9fd9-0de6c4f9a759_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/97dbb5a155ed59b9ccf8b0a5a1841dca_fbea71fa-3bbb-4779-a43b-1aa1624cb20d_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/934b5fb49dfac85a125827f0974a1adf_1c4542aa-3ef0-4551-85a6-b601b5a7b727_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e0563fc0978e3f9278a7b7000d1fc23e_f50eec39-d95f-4f4e-a44c-fe531d1bcd83_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/40a7ffb2911df8d21b78a8ed9dbc561a_ea61cee5-ab32-4c71-8208-fb987b940499_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4b4d0009af3539aee7f2f32ac75b5245_6dcc9a39-f9c7-4fc7-a155-f218d513a174_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/72384fde84daabfa7c1e3ff35b4ea061_3f4d7103-9e62-4914-8568-df082e6281e0_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c32e642b55717dad89cfb4fdb8659c2b_2bd3d796-6aa9-494d-a4d9-cb4f356f51d1_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-outfit_jrunjizf_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/mortal-kombat_uqbk6zbr_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scan-090_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/maui.frenchcanadianadv.ar_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/quietplace2.reg.ar_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/mulan_ver4_xlg_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9787c3308a841b2b01b2a10680052666_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f085590d0f8fd4d28fabdbe8ad0756c2_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/littlewomen.2020.adv.ar_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ab00c02f4db1ebd26c58588e46717316_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/freeguy.125811.ar_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1cb3a3eb47665f7ff2ce7297e24a07f9_51369d44-7ace-401e-9fbe-43bc34325495_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e1b6b5041db327bdaafea8eda5040cba_63c588f0-f797-48fa-963e-eaa62ace3ba9_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7a002dd6218ecc5fe2c562604b230a35_e901924d-e47d-423d-a28f-7c670357a44e_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5ec630b7b9aafb0832a26d741ff59bf8_796a7ba3-9f52-412a-b5f2-3da241e29aa3_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a8871bddfb07fbe42990d67155a6eedf_ce8a899c-ac97-4e4e-bbb7-1be00229e7f7_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/23a2d1b9e6a1494b0a5f6808af3f52b5_73e3dd67-4ffa-43b2-be9d-2c418f49715c_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ea155b9c724482297dfa471bb5531279_b6d4c724-c298-472f-a127-081d4f10664d_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d6d672b9a42eac2509f407dd8fa11b19_fd7a460b-d514-4ac2-9bed-467dacf1f33f_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/27bf509cd397f679041f557b56d2891d_ce1fd9c1-a33c-49b1-bc8a-a2191dd0a5dc_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a1557a97508cd62e1eb416b569add79e_3be769c6-726c-4e30-88e5-22995c5a1f81_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3bd1695448a5d0e2c9e46e3611c0bb71_7204ebd7-ebb5-444a-b288-64186473335b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b71ccfeda0f42c2dc352b8ae7c7c9456_7654cd61-773c-46b7-a15f-1393a18739e6_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1c76636db894c97d8fceac58b3bc20cb_a85086c4-376c-406e-8f1c-ed062f29ef44_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c45ef62834ac7cbfb9041747c2069e9e_78993e4f-a865-49d2-a138-b1d5c6b41735_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/hereditary_a505c7fb_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d6bba0bf90c74eb85c52c38f4ac235c0_90573dc4-d1b6-4511-84f8-44d446c1089c_500x749.jpg",
"https://pics.filmaffinity.com/The_Girl_with_the_Dragon_Tattoo-445739302-mmed.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/19ccdd60a913e77fef93d5e795c2b4e9_2254aa9f-3b8b-408f-80a7-3fa94509dfcc_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a40013903077bcf322f80dd32c7d3853_3c3eba47-d822-49d6-bb38-b24171e99049_480x.progressive.jpg",
"https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg",
"https://i.insider.com/518c4e5eecad045a02000015",
"https://thecinemaholic.com/wp-content/uploads/2018/01/the-ring-movie-poster.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/54a7d584151522374a23d7383541041f_ceb278bb-2a4d-4e08-8804-c97ce47f81d2_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a0b702ce008e912b8be2cf845d1f788e_640a13c4-4d98-4d2e-a791-57ab3a803d84_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c781bb97e012293c77d202da4231712d_0df6aaa3-44f2-412e-8ddb-4202a94b7dfc_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/badboysforlife.125804.ar_c94537eb-1293-4117-b639-cb73dd9e5f82_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/resident_evil_the_final_chapter_ver7_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/croods2.web_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/mission_impossible_ghost_protocol_ver3_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/tenet.regstyleb.ar_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/let_him_go_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/nader_and_simin_ver9_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/un_prophete_ver5_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/501306addee3ae2edf3470768a3e9b55_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ab28897c696f546c5bb74c954da5273c_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/282b16ef0ab5dd27b06b1dda42f96e4c_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/61c777f3a3579e0a0bf7b188a5396ad9_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/220af15bab7725cd71c6b88b858db31f_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/38d442e56d5661600066a948eb17f5c1_de20fbfe-5673-486f-ba57-b876fa6e3ece_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/38d442e56d5661600066a948eb17f5c1_de20fbfe-5673-486f-ba57-b876fa6e3ece_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/49654035ba040c29a9fff6bfa3c1ba8c_41a520f9-b720-4e90-80b1-1eebc69507bb_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9029c1658064e77712e37d50c33e52ce_1b0a1aff-32c2-43b7-a2a4-0022acc6f38f_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7d89afedaee2c1cf677d28887a41f026_3e40374d-cfb6-4e1e-b994-c0a1990ae94b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c43e2141d8951d4c4431965f0b8414ec_e4ca01e0-7a7f-43d7-af5b-dc08d4fb38a9_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/38e483194cfd1acf127ab83e880b92f6_07390375-6dd8-4990-b840-937373b1bddf_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0b181ad6f85038d84fad17acb1e62b1f_fd69b154-a0c4-4380-8f31-a29c80d0bb48_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1cb3a3eb47665f7ff2ce7297e24a07f9_51369d44-7ace-401e-9fbe-43bc34325495_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1e37bbeed4bd69430274dcc3137c1eae_49010e14-e665-4dae-8d03-12a9bb3e1750_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/62bed5879ddf4ce8a56706f3351a60cf_426767ff-a630-438f-9695-52856215a1b9_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a02f2674426d0953c7e2d0a21c4116fb_48dcfda4-e1c6-492c-8234-b047bf783188_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7a7093a22e3f0d2c1b620c8832fe3453_8863ec23-5006-4b5e-a6c3-d63f1471855a_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9cab4fe83f8063e0bcf8174f39ac19ae_1f34e68e-cfc0-4666-870e-4d1d9da58472_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7a002dd6218ecc5fe2c562604b230a35_e901924d-e47d-423d-a28f-7c670357a44e_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6a4964347d4c38d2f5b5e06b27443f9a_4a1bd3cd-de02-41d4-80b2-d60bdf06ba92_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b696aa9156c5f937c84c81bfa71bc592_9b9b4359-1f4a-476a-b1e8-0798f1bf5660_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a6e0d9d134abe291a519fdfc851eace4_bd457972-4d19-4938-988b-490848ffd67b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8328934cd2ee99d7a892afb4ac95a542_b929a4d4-c249-4968-ad23-31ad7d02f940_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ec54906f415373430fd632031d366a90_65a32f31-26ad-40ff-a239-52b6a70d5454_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/casino-royale_ad7d5f83_32c1cd0c-e1e0-4a44-ba1f-59a3c3ac5944_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/bba6011f152962c07d386c2b6ad14fec_ee43d8dd-bc1e-48aa-b047-de585c1d1896_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/667416f694e09111ab53b77f35472fe6_05322645-b356-4628-b7df-f0171abe5878_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c55a251542337b0de4b30626033c87ef_8a8b6d32-8e08-4f73-b7f3-e5717bcc988b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/640706d26a4138af7394b06d717ba60a_13c997ab-b78e-4fb8-8a30-7b1644d802e6_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/mask_of_zorro_ver2_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/fcbdb4c538839b1731e63b35172dbcf2_39ff37ac-955b-4c5c-867e-13b12bfe3802_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/54abdf720570df46fc6b2a171419d78b_1fcf7ad1-a982-4e32-a311-34d23179696f_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ecac05004153a3792c6963de14d42edf_b6c3d5a7-004c-4897-915b-35390294860d_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/76b92bb1e117bfd9c609be172dd7e404_49e55638-e262-4d03-92e2-98efb1bb92f0_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6c35c57c688a6b979988a9b9687fa1eb_692fb064-34fd-4717-9b86-94a43d75e427_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b810bf91935376d3f3620d639e2ca098_79859800-824c-49e9-85e8-763fa6b15886_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ef47bacd11146b55e9e4c4450cc232c0_10408467-feb1-45e2-b9ac-1cf23735e944_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9701d6d49bdc27eb49969fec31c65f8d_56ad98ce-159b-4e7d-986e-760ffaa7d13d_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3bd1695448a5d0e2c9e46e3611c0bb71_7204ebd7-ebb5-444a-b288-64186473335b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/79869b60ef8e22d47bd9747e0d364869_7f69f716-609f-4bb0-b21a-c7d9a95b2a0b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8e1f927e7957ddc344894216377da49d_95812745-21a4-4779-8882-3599a2e913cb_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4d577f4dcdc780ec66ec9fa05265eb24_a5b20f8e-088f-4102-aaaf-2e6e812652fa_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8fe702e00667328d9352bcbc82896720_1218bda7-7f30-49bd-a6a9-12e6df125710_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/609afba8d4fa4bbc02ea9db76e325623_689b3f03-41fc-4b8b-8fc2-74c459f69ed1_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/185f95238778d64a6b247a9efe2af617_866279bd-31bd-4b81-a82a-8ed966cf1ccf_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0e44e74473a79625738260875915861c_cf95cc77-12f6-4a4a-8ce5-48efd61c0c6d_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d87398d547324a91fde39b0f97cb3b6d_fb4b0749-5534-46c0-9bdd-dc63763249ce_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/aa11cb66da03e3075fa58c9186adb74f_c78ae23a-08e3-4658-b7ca-31f11ccf371d_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c0775c70af69f93c75c68b1cf3b7f9c6_0c2335ad-0765-4e5d-bf69-997db8655ff4_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4f941df62069c786c764feae132c325e_cedf50a4-a074-4637-b5c8-7efa3cffdfeb_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5059c455c5ea4dcf814cd8f3582cb869_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5561f16babd1be4b72979069a650565a_7c0f6082-44de-4ad9-b29c-58a6cdbbd8da_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d474a8c08e6712380d223782f38f1dca_a7b93d73-1f47-45c2-a443-bfd6a7713e2b_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/985a29533f02a28f3ba9c22a0d656992_7a9714d9-b076-4da4-8895-59a258e58b0c_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0147f0a06dd3a806a5c4073483c4b2ea_1fe88b60-6aaf-4e51-beaf-852032822c65_480x.progressive.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4bfe63bcef67a4297825df0c0fa9447d_267d9ad1-748c-442d-8199-22b6b8264804_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/807d8a15d04730882308bb540b923f1c_2f5fafd5-da2c-4d7c-b78e-176b9063008a_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6294ae3e57013170bfffc9e8d77379c3_500x749.jpg",
"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c9c64c70574b7736603237ef4f97f2e2_0422d116-4867-49cb-9235-717bad2e0dfd_500x749.jpg",
"https://i0.wp.com/cinema.al-rasid.com/files/2011/11/20532.jpg",
"https://i.postimg.cc/Wbg1yTM7/photo-5384209807751363513-y.jpg",
"https://i.postimg.cc/h4HGMf7j/photo-5384209807751363514-y.jpg",
"https://i.postimg.cc/v81BWWTk/photo-5384209807751363563-y.jpg",
"https://i.postimg.cc/4yHrm4J2/photo-5384209807751363564-y.jpg",
"https://i.postimg.cc/DmVRsV0v/photo-5384209807751363565-y.jpg",
"https://i.postimg.cc/B6VrSPG1/photo-5384209807751363566-y.jpg",
"https://i.postimg.cc/QdZrK7KQ/photo-5384209807751363567-y.jpg",
"https://i.postimg.cc/LsNdW0CD/photo-5384209807751363568-y.jpg",
"https://i.postimg.cc/sgPCY25t/photo-5384209807751363569-y.jpg",
"https://i.postimg.cc/QMXG0rbV/photo-5384209807751363569-y-1.jpg",
"https://i.postimg.cc/rsdLxC9J/photo-5384209807751363570-x.jpg",
"https://i.postimg.cc/dtyY063Q/photo-5384209807751363572-y.jpg",
"https://i.postimg.cc/5yZW3Y7M/photo-5384209807751363573-y.jpg",
"https://i.postimg.cc/kMZC9znh/photo-5384209807751363574-y.jpg",
"https://i.postimg.cc/Tw3xYXLB/photo-5384209807751363575-y.jpg",
"https://i.postimg.cc/8zLNZ4gX/photo-5384209807751363576-x.jpg",
"https://i.postimg.cc/pdZxHdTD/photo-5384209807751363577-y.jpg",
"https://i.postimg.cc/sDQVhy6r/photo-5384209807751363578-y.jpg",
"https://i.postimg.cc/pXwPQ74n/photo-5384209807751363579-y.jpg",
"https://i.postimg.cc/PfFXJNMy/photo-5384209807751363580-y.jpg",
"https://i.postimg.cc/Fz1hGQh0/photo-5384209807751363590-x.jpg",
"https://i.postimg.cc/vB8C1hc4/photo-5384209807751363430-x.jpg",
"https://i.postimg.cc/L5n7DskR/photo-5384209807751363431-y.jpg",
"https://i.postimg.cc/ZqSGm4mF/photo-5384209807751363432-x.jpg",
"https://i.postimg.cc/9MxKy97J/photo-5384209807751363433-x.jpg",
"https://i.postimg.cc/T3mzBhz3/photo-5384209807751363434-y.jpg",
"https://i.postimg.cc/5yycrgVh/photo-5384209807751363435-x.jpg",
"https://i.postimg.cc/VNW3LpLy/photo-5384209807751363436-y.jpg",
"https://i.postimg.cc/28qRF0Tv/photo-5384209807751363437-x.jpg",
"https://i.postimg.cc/sfHChkPs/photo-5384209807751363438-y.jpg",
"https://i.postimg.cc/283m9kj1/photo-5384209807751363439-y.jpg",
"https://i.postimg.cc/TPv6PnVb/photo-5384209807751363440-y.jpg",
"https://i.postimg.cc/cJ7Nt6hb/photo-5384209807751363441-y.jpg",
"https://i.postimg.cc/mD8fVq03/photo-5384209807751363442-x.jpg",
"https://i.postimg.cc/qqv0T08Z/photo-5384209807751363443-y.jpg",
"https://i.postimg.cc/tTXG3ymC/photo-5384209807751363444-y.jpg",
"https://i.postimg.cc/L4x2VYSd/photo-5384209807751363445-x.jpg",
"https://i.postimg.cc/5yKJ9Gg9/photo-5384209807751363446-y.jpg",
"https://i.postimg.cc/5y4928Mg/photo-5384209807751363448-y.jpg",
"https://i.postimg.cc/Sx3KfXWQ/photo-5384209807751363449-y.jpg",
"https://i.postimg.cc/j5rdBGgG/photo-5384209807751363450-x.jpg",
"https://i.postimg.cc/65HqTbqv/photo-5384209807751363451-x.jpg",
"https://i.postimg.cc/NFDM6pxZ/photo-5384209807751363452-y.jpg",
"https://i.postimg.cc/wBNjf6VX/photo-5384209807751363453-x.jpg",
"https://i.postimg.cc/13ftF0VY/photo-5384209807751363454-y.jpg",
"https://i.postimg.cc/X7NXj6jW/photo-5384209807751363455-y.jpg",
"https://i.postimg.cc/nz8CpszS/photo-5384209807751363456-x.jpg",
"https://i.postimg.cc/fbSJG7w0/photo-5384209807751363457-x.jpg"
];

export default {
  name: "افلام",
  author: "Kaguya Project",
  role: "member",
  aliases:["أفلام"],
  description: "يقترح عليك افلام عشوائية من اجل مشاهدتها",
  async execute({ api, event }) {
    try {
      const randomIndex = Math.floor(Math.random() * animeImageLinks.length);
      const imageUrl = animeImageLinks[randomIndex];

      const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
      const tempImagePath = path.join(process.cwd(), `./cache/anime_image_${randomIndex + 1}.jpg`);

      fs.writeFileSync(tempImagePath, Buffer.from(imageResponse.data));

      api.setMessageReaction("📸", event.messageID, () => {}, true);

      const message = {
        body: "✿━━━━━━━━━━━━━━━✿\n\t\t🎬 | إقتراحي لك \n✿━━━━━━━━━━━━━━━✿",
        attachment: fs.createReadStream(tempImagePath)
      };

      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(tempImagePath); // حذف الملف المؤقت للصورة بعد إرسال الرسالة
      });
    } catch (error) {
      console.error("حدث خطأ: ", error);
      api.sendMessage("❌ | حدث خطأ أثناء جلب صورة أنمي.", event.threadID);
    }
  },
};
