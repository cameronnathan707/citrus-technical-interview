import { fetchProgramTree } from '../constants/fetch-program-tree'
import { findNode } from '../constants/find-node'
import { ProgramNode, ProgramNodeTypeEnum } from '../interfaces/program-node'

interface IProps {
  id?: string
}

interface IValue {
  currentNode?: ProgramNode
  tree?: ProgramNode
  // Add any other attributes that you find valuable
}

export const useFetchProgramTree = ({id}: IProps = {}): IValue => {
  /*
    TODO: Fetch the program tree

    * Fetch the program tree using fetchProgramTree
    * Find the node with prop "id" using findNode
  */
  // let tree: ProgramNode = {
  //   id: '',
  //   type: ProgramNodeTypeEnum.program,
  //   name: ''
  // };
  // fetchProgramTree().then((value) => {tree = value}, (error) => {console.log(error)});
  const tree = {
    "id": "loc_1fMWbi8LHSWVspwg",
    "type": "program",
    "name": "CanadaSport",
    "description": "We work to ensure that no kid is ever left watching from the sidelines.",
    "nodes": [
      {
        "id": "loc_XgHHMnjhJBkwUJCN",
        "type": "region",
        "name": "British Columbia",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in British Columbia.",
        "nodes": [
          {
            "id": "loc_ZFUsYJexPvhXCSET",
            "type": "chapter",
            "name": "100 Mile House",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in 100 Mile House."
          },
          {
            "id": "loc_HNSwOAec7rM2wTvM",
            "type": "chapter",
            "name": "Abbotsford",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Abbotsford."
          },
          {
            "id": "loc_or7JJeMUOMOBsRcj",
            "type": "chapter",
            "name": "Burnaby",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Burnaby."
          },
          {
            "id": "loc_3aJ4FK06VN693K1d",
            "type": "chapter",
            "name": "Quesnel",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Quesnel."
          },
          {
            "id": "loc_kiYLGWxXRUplRRxy",
            "type": "chapter",
            "name": "Chetwynd",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Chetwynd."
          },
          {
            "id": "loc_2Wq8wQQe5ieBm3dK",
            "type": "chapter",
            "name": "Comox Valley",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Comox Valley."
          },
          {
            "id": "loc_a6DKhCK7L84nRkkO",
            "type": "chapter",
            "name": "Cowichan",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Cowichan."
          },
          {
            "id": "loc_m71wlcb98J56tjeq",
            "type": "chapter",
            "name": "Cranbrook",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Cranbrook."
          },
          {
            "id": "loc_cHWTYtMEG1bmmRKN",
            "type": "chapter",
            "name": "Dawson Creek",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Dawson Creek."
          },
          {
            "id": "loc_j7j1k0obOeiQbgNQ",
            "type": "chapter",
            "name": "Delta",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Delta."
          },
          {
            "id": "loc_HlQD6ROq4Ai1kZ39",
            "type": "chapter",
            "name": "Trail (Greater)",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Trail (Greater."
          },
          {
            "id": "loc_QDMp4q25ubfQLZyD",
            "type": "chapter",
            "name": "Vernon (Greater Vernon)",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Vernon (Greater Vernon."
          },
          {
            "id": "loc_cuOJUhWVyWryxXWh",
            "type": "chapter",
            "name": "Victoria/Victoria/Greater Victoria",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Victoria/Victoria/Greater Victoria."
          },
          {
            "id": "loc_BRv6cVyUD7DvLmuc",
            "type": "chapter",
            "name": "Kamloops",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kamloops."
          },
          {
            "id": "loc_bxs1GJFTfG5sn9nK",
            "type": "chapter",
            "name": "Kelowna",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kelowna."
          },
          {
            "id": "loc_3Z7x3aN2sgqrglCa",
            "type": "chapter",
            "name": "Kitimat",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kitimat."
          },
          {
            "id": "loc_09mBlPZhxKv2M6kd",
            "type": "chapter",
            "name": "Lake Country",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Lake Country."
          },
          {
            "id": "loc_V3I2UhEPMMv01VLk",
            "type": "chapter",
            "name": "Langley",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Langley."
          },
          {
            "id": "loc_F0ILfSw5VmQpEdV8",
            "type": "chapter",
            "name": "Maple Ridge / Pitt Meadows",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Maple Ridge / Pitt Meadows."
          },
          {
            "id": "loc_CVrDnYW6IQoyeMfL",
            "type": "chapter",
            "name": "Mission",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Mission."
          },
          {
            "id": "loc_3zOb82t9fT7sDIgk",
            "type": "chapter",
            "name": "Nanaimo",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Nanaimo."
          },
          {
            "id": "loc_agVONRbAwGjKhb43",
            "type": "chapter",
            "name": "Nelson",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Nelson."
          },
          {
            "id": "loc_49IqInGZx1TeG2Ia",
            "type": "chapter",
            "name": "New West",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in New West."
          },
          {
            "id": "loc_CLIxPqSyDFFdfuG8",
            "type": "chapter",
            "name": "North Peace (Ft. St. John)",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in North Peace (Ft. St. John."
          },
          {
            "id": "loc_nzJQn6LwRjOlNMBv",
            "type": "chapter",
            "name": "North Shore (North & West Vancouver)",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in North Shore (North & West Vancouver."
          },
          {
            "id": "loc_htzJIavEoVy6voWG",
            "type": "chapter",
            "name": "Parksville / Qualicum",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Parksville / Qualicum."
          },
          {
            "id": "loc_GQPC3boAvq2W0JHi",
            "type": "chapter",
            "name": "Penticton",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Penticton."
          },
          {
            "id": "loc_zfRVPCL813gFc9Vd",
            "type": "chapter",
            "name": "Port Alberni",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Port Alberni."
          },
          {
            "id": "loc_El5He0No8g1OaGtM",
            "type": "chapter",
            "name": "Prince George",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Prince George."
          },
          {
            "id": "loc_IGN8CyqQmSJ4tKrP",
            "type": "chapter",
            "name": "Prince Rupert",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Prince Rupert."
          },
          {
            "id": "loc_L6BtAUGX27Rw8Bm3",
            "type": "chapter",
            "name": "Richmond",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Richmond."
          },
          {
            "id": "loc_Mby9Rn4EEf3ucXXk",
            "type": "chapter",
            "name": "Squamish",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Squamish."
          },
          {
            "id": "loc_cXcdpcZYyoNLXGvl",
            "type": "chapter",
            "name": "Summerland",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Summerland."
          },
          {
            "id": "loc_DofeINRDfX7XK9gI",
            "type": "chapter",
            "name": "Sunshine Coast",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Sunshine Coast."
          },
          {
            "id": "loc_Q7pD8hjW1uVu8frE",
            "type": "chapter",
            "name": "Surrey / White Rock",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Surrey / White Rock."
          },
          {
            "id": "loc_g3vnoZdo6czkNgFZ",
            "type": "chapter",
            "name": "Terrace",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Terrace."
          },
          {
            "id": "loc_dHzVIytzviHEaMgq",
            "type": "chapter",
            "name": "Tri-Cities",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Tri-Cities."
          },
          {
            "id": "loc_Mbztn90Lk4LNAZLM",
            "type": "chapter",
            "name": "Vancouver",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Vancouver."
          },
          {
            "id": "loc_LNhXcCKfFAAsFbW3",
            "type": "chapter",
            "name": "West Kelowna",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in West Kelowna."
          },
          {
            "id": "loc_EM0VxWrMgaNINyTF",
            "type": "chapter",
            "name": "Williams Lake",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Williams Lake."
          }
        ]
      },
      {
        "id": "loc_I3gAxgddEWwVKvkJ",
        "type": "region",
        "name": "Alberta",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Alberta.",
        "nodes": [
          {
            "id": "loc_Mln6OM8v7abE7M7T",
            "type": "chapter",
            "name": "Bonnyville",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Bonnyville."
          },
          {
            "id": "loc_Uh1bZk8GKib0bD2n",
            "type": "chapter",
            "name": "Bow Valley",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Bow Valley."
          },
          {
            "id": "loc_z6ajnvRKgm16MfC9",
            "type": "chapter",
            "name": "Calgary & Area",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Calgary & Area."
          },
          {
            "id": "loc_KMhEGMWxjydwGUgk",
            "type": "chapter",
            "name": "Camrose",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Camrose."
          },
          {
            "id": "loc_EGJsw1e9dg0TOJZa",
            "type": "chapter",
            "name": "Claresholm",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Claresholm."
          },
          {
            "id": "loc_52XhwhoNz7epj8yi",
            "type": "chapter",
            "name": "Cold Lake",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Cold Lake."
          },
          {
            "id": "loc_hc02ptEFcxuHIoub",
            "type": "chapter",
            "name": "Crowsnest Pass",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Crowsnest Pass."
          },
          {
            "id": "loc_3ABpjAsD6LIQJkzb",
            "type": "chapter",
            "name": "Delia",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Delia."
          },
          {
            "id": "loc_WZVNQVyvafnkYrt6",
            "type": "chapter",
            "name": "Drumheller",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Drumheller."
          },
          {
            "id": "loc_OwTRuzVwlNdyxLVV",
            "type": "chapter",
            "name": "Edmonton",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Edmonton."
          },
          {
            "id": "loc_LCUdQcs9D5L4Bt7v",
            "type": "chapter",
            "name": "Fairview",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Fairview."
          },
          {
            "id": "loc_CCdvUmhrX7XhJqa8",
            "type": "chapter",
            "name": "Fort Saskatchewan",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Fort Saskatchewan."
          },
          {
            "id": "loc_hwT6izWONQm63PNh",
            "type": "chapter",
            "name": "Grande Cache",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Grande Cache."
          },
          {
            "id": "loc_iPFgF1hUu9H5tI10",
            "type": "chapter",
            "name": "Grande Prairie",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Grande Prairie."
          },
          {
            "id": "loc_NQh7uGcMTpXitzYq",
            "type": "chapter",
            "name": "Hanna",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Hanna."
          },
          {
            "id": "loc_wx96T9mTxXbISs0p",
            "type": "chapter",
            "name": "Kneehill",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kneehill."
          },
          {
            "id": "loc_KenTDVEP5zl77rWx",
            "type": "chapter",
            "name": "Lac La Biche",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Lac La Biche."
          },
          {
            "id": "loc_OltHgFYiFg0GN0VB",
            "type": "chapter",
            "name": "Lacombe",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Lacombe."
          },
          {
            "id": "loc_LgUvXYeHiPpeKikK",
            "type": "chapter",
            "name": "Lethbridge & Taber",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Lethbridge & Taber."
          },
          {
            "id": "loc_spAjQAw4sMfO5MDk",
            "type": "chapter",
            "name": "Medicine Hat & Redcliff",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Medicine Hat & Redcliff."
          },
          {
            "id": "loc_zPwJKjVPUl0zMWFr",
            "type": "chapter",
            "name": "Okotoks",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Okotoks."
          },
          {
            "id": "loc_taEyviQkelVxGvEt",
            "type": "chapter",
            "name": "Parkland",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Parkland."
          },
          {
            "id": "loc_8rRjwGT8fkuipRlj",
            "type": "chapter",
            "name": "Pincher Creek",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Pincher Creek."
          },
          {
            "id": "loc_A8uygrhvtE4s6PM9",
            "type": "chapter",
            "name": "Ponoka",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Ponoka."
          },
          {
            "id": "loc_Y9jMtk9GHHFa8Jlb",
            "type": "chapter",
            "name": "Provost",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Provost."
          },
          {
            "id": "loc_C6k3ZyOHUmLAbRkP",
            "type": "chapter",
            "name": "Red Deer",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Red Deer."
          },
          {
            "id": "loc_KXyImR2gflOnRfnR",
            "type": "chapter",
            "name": "Slave Lake",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Slave Lake."
          },
          {
            "id": "loc_VlGPrneDsPQ1912F",
            "type": "chapter",
            "name": "Smoky River M.D.",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Smoky River M.D."
          },
          {
            "id": "loc_1vS93O83mvJSxgGW",
            "type": "chapter",
            "name": "St Albert",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in St Albert."
          },
          {
            "id": "loc_kT4zQdP6FxSshJB2",
            "type": "chapter",
            "name": "St Paul",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in St Paul."
          },
          {
            "id": "loc_gGiFo8E00pJTzRcc",
            "type": "chapter",
            "name": "Stettler",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Stettler."
          },
          {
            "id": "loc_G6pKldKCGLwZmWKC",
            "type": "chapter",
            "name": "Vegreville (County Of Minburn)",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Vegreville (County Of Minburn."
          },
          {
            "id": "loc_IZE9DRRzkiESXWub",
            "type": "chapter",
            "name": "Vermilion",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Vermilion."
          },
          {
            "id": "loc_eol7RNrcDmukhYAh",
            "type": "chapter",
            "name": "Viking",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Viking."
          },
          {
            "id": "loc_biDenX0snhm0uBE0",
            "type": "chapter",
            "name": "Vulcan County",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Vulcan County."
          },
          {
            "id": "loc_zJyzcwLtMfFsxjNZ",
            "type": "chapter",
            "name": "Wainwright",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Wainwright."
          },
          {
            "id": "loc_VvkkZ0Q8tNrSc79T",
            "type": "chapter",
            "name": "Whitecourt",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Whitecourt."
          },
          {
            "id": "loc_G3FijTDNNRp6zBuh",
            "type": "chapter",
            "name": "Wood Buffalo",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Wood Buffalo."
          }
        ]
      },
      {
        "id": "loc_ODGyzmgtQ4QyLIbB",
        "type": "region",
        "name": "Manitoba",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Manitoba.",
        "nodes": [
          {
            "id": "loc_KvJWr3ulLgT45PYm",
            "type": "chapter",
            "name": "Manitoba East Region",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Manitoba East Region."
          },
          {
            "id": "loc_EJL7BEnAtqmnSdvm",
            "type": "chapter",
            "name": "Manitoba North Region",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Manitoba North Region."
          },
          {
            "id": "loc_gwXH5GS0TbQ7lfrm",
            "type": "chapter",
            "name": "Manitoba South Region",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Manitoba South Region."
          },
          {
            "id": "loc_7wclHHqIkcE17dyq",
            "type": "chapter",
            "name": "Manitoba West Region",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Manitoba West Region."
          },
          {
            "id": "loc_zXuQ8YfAbm8fOBm7",
            "type": "chapter",
            "name": "Winnipeg",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Winnipeg."
          }
        ]
      },
      {
        "id": "loc_YZLHByQwVXVMXMmo",
        "type": "region",
        "name": "New Brunswick",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in New Brunswick.",
        "nodes": [
          {
            "id": "loc_hscNYA12QLCtgJT6",
            "type": "chapter",
            "name": "Chaleur",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Chaleur."
          },
          {
            "id": "loc_5PRLmrFv3upi9koL",
            "type": "chapter",
            "name": "Fredericton, Moncton, Saint John",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Fredericton, Moncton, Saint John."
          },
          {
            "id": "loc_aBHiwgJsZzQvQpBO",
            "type": "chapter",
            "name": "Kent County",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kent County."
          },
          {
            "id": "loc_GnWEYAyqn6DAZLWg",
            "type": "chapter",
            "name": "Miramichi",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Miramichi."
          },
          {
            "id": "loc_RZejdkSmWuH4qiiW",
            "type": "chapter",
            "name": "Acadian Peninsula",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Acadian Peninsula."
          },
          {
            "id": "loc_KmrG0eL8N4tI5rej",
            "type": "chapter",
            "name": "Restigouche",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Restigouche."
          },
          {
            "id": "loc_V1rJWF9cYSH3axiI",
            "type": "chapter",
            "name": "St. Stephen",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in St. Stephen."
          }
        ]
      },
      {
        "id": "loc_eHbKfOnim3YPPLuR",
        "type": "chapter",
        "name": "Newfoundland and Labrador",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Newfoundland and Labrador."
      },
      {
        "id": "loc_z6pnAXKLzoC6VPIe",
        "type": "chapter",
        "name": "Northwest Territories",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Northwest Territories."
      },
      {
        "id": "loc_sn18iv9fue0Csgpo",
        "type": "region",
        "name": "Nova Scotia",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Nova Scotia.",
        "nodes": [
          {
            "id": "loc_PzwZWQBqHHwzasKN",
            "type": "chapter",
            "name": "Annapolis / Digby",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Annapolis / Digby."
          },
          {
            "id": "loc_ijlEaCz483lVTvdY",
            "type": "chapter",
            "name": "Antigonish",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Antigonish."
          },
          {
            "id": "loc_ng7mw9N9FVIjz7bi",
            "type": "chapter",
            "name": "CBRM / Victoria",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in CBRM / Victoria."
          },
          {
            "id": "loc_DlsV4MKE22wXhjZH",
            "type": "chapter",
            "name": "Colchester / East Hants",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Colchester / East Hants."
          },
          {
            "id": "loc_ylkASQBAkXcb69c9",
            "type": "chapter",
            "name": "Cumberland",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Cumberland."
          },
          {
            "id": "loc_QO7o2o15RbU40xJv",
            "type": "chapter",
            "name": "Guysborough",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Guysborough."
          },
          {
            "id": "loc_9HbSnuaS0lW8WkI7",
            "type": "chapter",
            "name": "Halifax Regional Municipality",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Halifax Regional Municipality."
          },
          {
            "id": "loc_c9xf3p65VmbzJHeh",
            "type": "chapter",
            "name": "Inverness / Richmond",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Inverness / Richmond."
          },
          {
            "id": "loc_MzLBCNcCBzoaSeqY",
            "type": "chapter",
            "name": "Kings / West Hants",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kings / West Hants."
          },
          {
            "id": "loc_mgAcojx4MYvvHRQB",
            "type": "chapter",
            "name": "Lunenburg",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Lunenburg."
          },
          {
            "id": "loc_5oPRm4UmgPF0Vi3O",
            "type": "chapter",
            "name": "Pictou",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Pictou."
          },
          {
            "id": "loc_nMxYzwY1GhkzIiPN",
            "type": "chapter",
            "name": "Queens",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Queens."
          },
          {
            "id": "loc_fvrtUSfiqIrCuzNO",
            "type": "chapter",
            "name": "Shelburne / Yarmouth",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Shelburne / Yarmouth."
          }
        ]
      },
      {
        "id": "loc_1S2j8lnPza72yS8z",
        "type": "region",
        "name": "Ontario",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Ontario.",
        "nodes": [
          {
            "id": "loc_n1kYUXkJKwQHzCMR",
            "type": "chapter",
            "name": "Atikokan",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Atikokan."
          },
          {
            "id": "loc_wRrvYbXp6dgyMcaB",
            "type": "chapter",
            "name": "Fort Frances",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Fort Frances."
          },
          {
            "id": "loc_9X5DD7qx79qg3Sgk",
            "type": "chapter",
            "name": "Georgian Bay",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Georgian Bay."
          },
          {
            "id": "loc_Qls26w19CNTSdfn3",
            "type": "chapter",
            "name": "Hearst",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Hearst."
          },
          {
            "id": "loc_wAmoCbM9a1SuoYbp",
            "type": "chapter",
            "name": "Hornepayne",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Hornepayne."
          },
          {
            "id": "loc_nf4zk6j3HSvhJddN",
            "type": "chapter",
            "name": "Iroquois Falls",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Iroquois Falls."
          },
          {
            "id": "loc_7IeOfI8nsvAlJnmk",
            "type": "chapter",
            "name": "Kitchener Waterloo",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kitchener Waterloo."
          },
          {
            "id": "loc_Jgbm3M9XdmfYbQcv",
            "type": "chapter",
            "name": "London",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in London."
          },
          {
            "id": "loc_69HLMJqZBsWuCwIK",
            "type": "chapter",
            "name": "Norfolk County",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Norfolk County."
          },
          {
            "id": "loc_LgJ6H5lWNGOIuzDM",
            "type": "chapter",
            "name": "North Bay",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in North Bay."
          },
          {
            "id": "loc_w3Mg7owzszluZmoC",
            "type": "chapter",
            "name": "Northumberland County",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Northumberland County."
          },
          {
            "id": "loc_7r7AFFodSv1bjcQk",
            "type": "chapter",
            "name": "Norwich & District",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Norwich & District."
          },
          {
            "id": "loc_znNtcSlmAU2fXU67",
            "type": "chapter",
            "name": "Orangeville & District",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Orangeville & District."
          },
          {
            "id": "loc_5OEixAmVQhvyOaTH",
            "type": "chapter",
            "name": "Ottawa",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Ottawa."
          },
          {
            "id": "loc_YqKQWJCHohDkgnfy",
            "type": "chapter",
            "name": "Renfrew County",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Renfrew County."
          },
          {
            "id": "loc_LCAACG1U32OdLP55",
            "type": "chapter",
            "name": "Toronto",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Toronto."
          },
          {
            "id": "loc_99gjvfrLyWYpdwdS",
            "type": "chapter",
            "name": "Windsor",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Windsor."
          }
        ]
      },
      {
        "id": "loc_gXPzxhaLybUhAl9o",
        "type": "chapter",
        "name": "Prince Edward Island",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Prince Edward Island."
      },
      {
        "id": "loc_yqzHnnBrOpchEq9W",
        "type": "chapter",
        "name": "Quebec",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Quebec."
      },
      {
        "id": "loc_Dw3gQgGil3VWL6kM",
        "type": "region",
        "name": "Saskatchewan",
        "description": "We work to ensure that no kid is ever left watching from the sidelines in Saskatchewan.",
        "nodes": [
          {
            "id": "loc_gyOMRhEYcB1PKiJw",
            "type": "chapter",
            "name": "Asquith",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Asquith."
          },
          {
            "id": "loc_4nmakupSj4udoHFB",
            "type": "chapter",
            "name": "Battlefords",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Battlefords."
          },
          {
            "id": "loc_zMoTniNEqwum6tG5",
            "type": "chapter",
            "name": "Big River",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Big River."
          },
          {
            "id": "loc_gVwGyS8K7D8zPX9x",
            "type": "chapter",
            "name": "Biggar",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Biggar."
          },
          {
            "id": "loc_KVKA77VOlIEvAIIJ",
            "type": "chapter",
            "name": "Carlyle",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Carlyle."
          },
          {
            "id": "loc_9YvRtq3nTMBMyfPp",
            "type": "chapter",
            "name": "Carrot River",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Carrot River."
          },
          {
            "id": "loc_5lePU6fyGwL6d5JP",
            "type": "chapter",
            "name": "Esterhazy",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Esterhazy."
          },
          {
            "id": "loc_t4PZeApstLJpgoth",
            "type": "chapter",
            "name": "Estevan",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Estevan."
          },
          {
            "id": "loc_HaARPMLObypJoLBp",
            "type": "chapter",
            "name": "Eston",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Eston."
          },
          {
            "id": "loc_Iq5Q2inN96SDWxpO",
            "type": "chapter",
            "name": "Foam Lake",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Foam Lake."
          },
          {
            "id": "loc_vf77Z9N9Pr2UfHWE",
            "type": "chapter",
            "name": "Grenfell",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Grenfell."
          },
          {
            "id": "loc_sLbSnvXEam1eG7sJ",
            "type": "chapter",
            "name": "Gull Lake",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Gull Lake."
          },
          {
            "id": "loc_O8Bs0b1EhxBqdRVR",
            "type": "chapter",
            "name": "Hudson Bay",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Hudson Bay."
          },
          {
            "id": "loc_jdzhipf6Rfxu8WPU",
            "type": "chapter",
            "name": "Humboldt",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Humboldt."
          },
          {
            "id": "loc_GM1dYaJXcXQuhqem",
            "type": "chapter",
            "name": "Indian Head",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Indian Head."
          },
          {
            "id": "loc_sranemFz0EXa6tiJ",
            "type": "chapter",
            "name": "Kelvington",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kelvington."
          },
          {
            "id": "loc_rWkEew0XhdzTvyql",
            "type": "chapter",
            "name": "Kerrobert",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kerrobert."
          },
          {
            "id": "loc_oCp4Oj9UcG3ndpZn",
            "type": "chapter",
            "name": "Kindersley",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kindersley."
          },
          {
            "id": "loc_jzYa5xU2s0goFb3n",
            "type": "chapter",
            "name": "Kipling",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Kipling."
          },
          {
            "id": "loc_ALdgx6m3GxE0Zu6f",
            "type": "chapter",
            "name": "La Ronge",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in La Ronge."
          },
          {
            "id": "loc_N6GPAKWun0AAr7ek",
            "type": "chapter",
            "name": "Lloydminster",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Lloydminster."
          },
          {
            "id": "loc_ZPSLHo7MFvh49XLQ",
            "type": "chapter",
            "name": "Meadow Lake",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Meadow Lake."
          },
          {
            "id": "loc_a1R0PnoW1OSxkxEZ",
            "type": "chapter",
            "name": "Melfort",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Melfort."
          },
          {
            "id": "loc_MOTPOC2UwWNwZ3xK",
            "type": "chapter",
            "name": "Moose Jaw",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Moose Jaw."
          },
          {
            "id": "loc_BQq6EWUQXWL8vj3k",
            "type": "chapter",
            "name": "Nipawin",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Nipawin."
          },
          {
            "id": "loc_SNpPIklZUmMTMvlD",
            "type": "chapter",
            "name": "Pipestone",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Pipestone."
          },
          {
            "id": "loc_jTYcm8AmquNG2Io0",
            "type": "chapter",
            "name": "Porcupine Plain",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Porcupine Plain."
          },
          {
            "id": "loc_qBUuYt092DaCVwcf",
            "type": "chapter",
            "name": "Prince Albert",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Prince Albert."
          },
          {
            "id": "loc_wIUcJymWDUMp0FEU",
            "type": "region",
            "name": "Regina",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Regina.",
            "nodes": [
              {
                "id": "loc_7uNiDS4fobdeFfq7",
                "type": "chapter",
                "name": "East Regina",
                "description": "We work to ensure that no kid is ever left watching from the sidelines in Regina."
              },
              {
                "id": "loc_PEV3QglVedZH9iN6",
                "type": "chapter",
                "name": "West Regina",
                "description": "We work to ensure that no kid is ever left watching from the sidelines in Regina."
              }
            ]
          },
          {
            "id": "loc_L40F6pw9obRQTArg",
            "type": "chapter",
            "name": "Rosetown",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Rosetown."
          },
          {
            "id": "loc_ySQgCP9AzLl90gmS",
            "type": "chapter",
            "name": "Saskatoon",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Saskatoon."
          },
          {
            "id": "loc_pLsPwm6WQD7atidZ",
            "type": "chapter",
            "name": "Shaunavon",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Shaunavon."
          },
          {
            "id": "loc_qOteF7qT7SG3lvEo",
            "type": "chapter",
            "name": "Swift Current",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Swift Current."
          },
          {
            "id": "loc_4GI2me2gAcx7UdTL",
            "type": "chapter",
            "name": "Tisdale",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Tisdale."
          },
          {
            "id": "loc_dFGCTTZLMZB3JhOd",
            "type": "chapter",
            "name": "Unity",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Unity."
          },
          {
            "id": "loc_SUcSwn1FNC62UbsS",
            "type": "chapter",
            "name": "Warman, Martensville & Area",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Warman, Martensville & Area."
          },
          {
            "id": "loc_ttS3GZRc2yuuXgpO",
            "type": "chapter",
            "name": "Watrous",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Watrous."
          },
          {
            "id": "loc_MxOpWkC0GaYeiCBN",
            "type": "chapter",
            "name": "Weyburn",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Weyburn."
          },
          {
            "id": "loc_2xFeNEWgfYyMYKdl",
            "type": "chapter",
            "name": "Wynyard",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Wynyard."
          },
          {
            "id": "loc_qYOm9rCeVpR94vOZ",
            "type": "chapter",
            "name": "Yorkton",
            "description": "We work to ensure that no kid is ever left watching from the sidelines in Yorkton."
          }
        ]
      }
    ]
  } as ProgramNode;
  // const tree = await fetchProgramTree();
  const currentNode = findNode(tree, id);
  return {
    currentNode,
    tree
  }
}

export default useFetchProgramTree