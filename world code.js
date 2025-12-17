/*MIT License
Copyright (c) 2025 彗星
Permission is hereby granted, free of charge, to any person obtaining a copy...
*/

globalThis.costList = {
	"Diamond" : 1,
	"Gold Bar" : 50
}

globalThis.ranks = [
    {
        require: 0,
        rank: [{ str: "No Role", style: { color: "#888888" } }],
        bgColor: "#222222", chatTextColor: "white", chatNameColor: "#AAAAAA"
    },{
        require: 100,
        rank: [{ str: "Bronze I", style: { color: "#FF6666" } }],
        bgColor: "#FFCCCC", chatTextColor: "white", chatNameColor: "#FF9999"
    },{
        require: 130,
        rank: [{ str: "Bronze II", style: { color: "#FF7777" } }],
        bgColor: "#FFDDDD", chatTextColor: "white", chatNameColor: "#FFAAAA"
    },{
        require: 160,
        rank: [{ str: "Bronze III", style: { color: "#FF8888" } }],
        bgColor: "#FFE5E5", chatTextColor: "white", chatNameColor: "#FFBBBB"
    },{
        require: 200,
        rank: [{ str: "Bronze IV", style: { color: "#FF9999" } }],
        bgColor: "#FFF0F0", chatTextColor: "white", chatNameColor: "#FFCCCC"
    },{
        require: 250,
        rank: [{ str: "Bronze V", style: { color: "#FFAAAA" } }],
        bgColor: "#FFF5F5", chatTextColor: "white", chatNameColor: "#FFDDDD"
    },{
        require: 400,
        rank: [{ str: "Silver I", style: { color: "#C0C0C0" } }],
        bgColor: "#DDDDDD", chatTextColor: "white", chatNameColor: "#AAAAAA"
    },{
        require: 450,
        rank: [{ str: "Silver II", style: { color: "#BFBFBF" } }],
        bgColor: "#E0E0E0", chatTextColor: "white", chatNameColor: "#BBBBBB"
    },{
        require: 500,
        rank: [{ str: "Silver III", style: { color: "#B0B0B0" } }],
        bgColor: "#E8E8E8", chatTextColor: "white", chatNameColor: "#CCCCCC"
    },{
        require: 550,
        rank: [{ str: "Silver IV", style: { color: "#A0A0A0" } }],
        bgColor: "#F0F0F0", chatTextColor: "white", chatNameColor: "#DDDDDD"
    },{
        require: 600,
        rank: [{ str: "Silver V", style: { color: "#909090" } }],
        bgColor: "#F5F5F5", chatTextColor: "white", chatNameColor: "#EEEEEE"
    },{
        require: 700,
        rank: [{ str: "Gold I", style: { color: "#FFD700" } }],
        bgColor: "#FFF8DC", chatTextColor: "white", chatNameColor: "#FFCC00"
    },{
        require: 750,
        rank: [{ str: "Gold II", style: { color: "#FFDB4D" } }],
        bgColor: "#FFFACD", chatTextColor: "white", chatNameColor: "#FFD633"
    },{
        require: 800,
        rank: [{ str: "Gold III", style: { color: "#FFE066" } }],
        bgColor: "#FFFDD0", chatTextColor: "white", chatNameColor: "#FFD94D"
    },{
        require: 850,
        rank: [{ str: "Gold IV", style: { color: "#FFE680" } }],
        bgColor: "#FFFFE0", chatTextColor: "white", chatNameColor: "#FFDD66"
    },{
        require: 900,
        rank: [{ str: "Gold V", style: { color: "#FFEB99" } }],
        bgColor: "#FFFFF0", chatTextColor: "white", chatNameColor: "#FFE680"
    },{
        require: 1000,
        rank: [{ str: "Platinum I", style: { color: "#E5E4E2" } }],
        bgColor: "#F0F8FF", chatTextColor: "white", chatNameColor: "#CCCCFF"
    },{
        require: 1100,
        rank: [{ str: "Platinum II", style: { color: "#DCDCDC" } }],
        bgColor: "#F5F5F5", chatTextColor: "white", chatNameColor: "#BBBBFF"
    },{
        require: 1200,
        rank: [{ str: "Platinum III", style: { color: "#D3D3D3" } }],
        bgColor: "#FAFAFA", chatTextColor: "white", chatNameColor: "#AAAAFF"
    },{
        require: 1300,
        rank: [{ str: "Platinum IV", style: { color: "#C0C0C0" } }],
        bgColor: "#FFFFFF", chatTextColor: "white", chatNameColor: "#9999FF"
    },{
        require: 1400,
        rank: [{ str: "Platinum V", style: { color: "#B0C4DE" } }],
        bgColor: "#F8F8FF", chatTextColor: "white", chatNameColor: "#8888FF"
    },{
        require: 1500,
        rank: [{ str: "Diamond I", style: { color: "#00FFFF" } }],
        bgColor: "#E0FFFF", chatTextColor: "white", chatNameColor: "#66FFFF"
    },{
        require: 1600,
        rank: [{ str: "Diamond II", style: { color: "#40E0D0" } }],
        bgColor: "#F0FFFF", chatTextColor: "white", chatNameColor: "#66E0D0"
    },{
        require: 1700,
        rank: [{ str: "Diamond III", style: { color: "#48D1CC" } }],
        bgColor: "#F5FFFF", chatTextColor: "white", chatNameColor: "#66D1CC"
    },{
        require: 1800,
        rank: [{ str: "Diamond IV", style: { color: "#20B2AA" } }],
        bgColor: "#F8FFFF", chatTextColor: "white", chatNameColor: "#66B2AA"
    },{
        require: 1900,
        rank: [{ str: "Diamond V", style: { color: "#5F9EA0" } }],
        bgColor: "#FAFFFF", chatTextColor: "white", chatNameColor: "#669EA0"
    },{
        require: 2000,
        rank: [{ str: "Master I", style: { color: "#FF33CC" } }],
        bgColor: "#FFF0F5", chatTextColor: "white", chatNameColor: "#FF99CC"
    },{
        require: 2200,
        rank: [{ str: "Master II", style: { color: "#FF3399" } }],
        bgColor: "#FFE6F0", chatTextColor: "white", chatNameColor: "#FF66AA"
    },{
        require: 2400,
        rank: [{ str: "Master III", style: { color: "#FF3366" } }],
        bgColor: "#FFDDE6", chatTextColor: "white", chatNameColor: "#FF6699"
    },{
        require: 2600,
        rank: [{ str: "Master IV", style: { color: "#FF3333" } }],
        bgColor: "#FFD6D6", chatTextColor: "white", chatNameColor: "#FF6666"
    },{
        require: 2800,
        rank: [{ str: "Master V", style: { color: "#CC0000" } }],
        bgColor: "#FFCCCC", chatTextColor: "white", chatNameColor: "#FF4444"
    },{
        require: 3000,
        rank: [{ str: "Legend I", style: { color: "#9933FF" } }],
        bgColor: "#F5F5FF", chatTextColor: "white", chatNameColor: "#CC99FF"
    },{
        require: 3200,
        rank: [{ str: "Legend II", style: { color: "#8A2BE2" } }],
        bgColor: "#F0F0FF", chatTextColor: "white", chatNameColor: "#BB88FF"
    },{
        require: 3400,
        rank: [{ str: "Legend III", style: { color: "#7B68EE" } }],
        bgColor: "#E8E8FF", chatTextColor: "white", chatNameColor: "#AA77FF"
    },{
        require: 3600,
        rank: [{ str: "Legend IV", style: { color: "#6A5ACD" } }],
        bgColor: "#E0E0FF", chatTextColor: "white", chatNameColor: "#9966FF"
    },{
        require: 3800,
        rank: [{ str: "Legend V", style: { color: "#4B0082" } }],
        bgColor: "#D8D8FF", chatTextColor: "white", chatNameColor: "#8844FF"
    }
]

class CoinsAndAura {
	constructor (pId) {
		this.pId = pId
		let infos = api.getMoonstoneChestItemSlot(pId,35)?.attributes?.customAttributes?.enchantments
		this.coins = infos?.Coins ?? 0
		this.auraPerLevel = infos?.auraPerLevel
		this.maxAura = infos?.maxAura
		this.aura = infos?.aura

		if([this.auraPerLevel,this.maxAura,this.aura].includes(undefined)) {
			this.getAura()
		}

		this.display()
		this.setAura()
	}

	getAura () {
		this.auraPerLevel = api.getClientOption(this.pId,"auraPerLevel")
		this.maxAura = api.getClientOption(this.pId,"maxAuraLevel")
		this.aura = api.getAuraInfo(this.pId).totalAura
	}

	setAura () {
		api.setClientOptions(this.pId,{auraPerLevel :this.auraPerLevel,maxAuraLevel:this.maxAura})
		api.setTotalAura(this.pId,this.aura)
	}

	save () {
		this.getAura()
		api.setMoonstoneChestItemSlot(this.pId,35,"Block of Gold",1,{
			customDisplayName:"Data Stone",
			customAttributes:{enchantments:{Coins:this.coins,auraPerLevel:this.auraPerLevel,maxAura:this.maxAura,aura:this.aura}}
		})
	}

	changeCoins (val) {
		this.coins += val
		this.display()
		return(this.coins)
	}

	display () {
		api.setClientOption(this.pId,"RightInfoText",`Coins:${Math.floor(this.coins)}`)
		const pRank = this.getRank()
		api.setTargetedPlayerSettingForEveryone(this.pId,"lobbyLeaderboardValues",{coins:this.coins,ranks:pRank.rank},true)
		if(pRank.bgColor !== undefined) {
			api.setTargetedPlayerSettingForEveryone(this.pId,"colorInLobbyLeaderboard",pRank.bgColor)
		}
	}

	getRank () {
		for(let i = 0; i < globalThis.ranks.length; i++) {
			if(globalThis.ranks[i].require > this.coins) {
				return(globalThis.ranks[i-1])
			}
		}
		return(globalThis.ranks.at(-1))
	}

	log (onlyValue) {
		if(onlyValue) {
			return(this.coins)
		}else {
			return(`Your Coin : ${this.coins}`)
		}
	}

	buy (name,amt,attributes,cost,slot) {
		if(cost == "auto") {
			cost = globalThis.costList[name] *amt
			if(isNaN(cost)) {
				return("Can't Buy")
			}
			
		}
		if(this.coins >= cost) {
			slot = slot == undefined ? 1 : slot
			if(api.getInventoryFreeSlotCount(this.pId) < slot) {
				return("No Space")
			}
			let result = api.giveItem(this.pId,name,amt,attributes)
			this.changeCoins(-cost)

		}else {
			return("No Money")
		}
	}

	sell (name,amt,price) {
		if(price == "auto") {
			price = globalThis.priceList[name]
			if(price == undefined) {
				return("Can't Sell")
			}
		}
		if(name == "held") {
			const held = api.getHeldItem(this.pId)
			if(held == null) {
				return("No Item")
			}
			if(amt == "auto") {
				price *= held.amount
			}else if(held.amount ?? 1 < amt) {
				return("Not Enough")
			}
			api.setItemSlot(this.pId,api.getSelectedInventorySlotI(this.pId),"Air",0)
		}else {
			const have = api.getInventoryItemAmount(this.pId,name)
			if(amt == "all") {
				api.removeItemName(this.pId,name,have)
				price *= have
			}else if(have < amt) {
				return("Not Enough")
			}else {
				api.removeItemName(this.pId,name,amt)
			}

		}
		this.changeCoins(price)
	}

	buyAura (aura,cost) {
		cost /= api.getAuraInfo(this.pId).auraPerLevel
		if(typeof aura === "string") {
			if(aura.includes("Lv")) {
				aura = Number(aura.replace("Lv",""))
				aura *= api.getAuraInfo(this.pId).auraPerLevel
				cost *= aura
			}
		}
		if(this.coins < cost) {
			return("No Money")
		}
		if(typeof aura !== "number") {
			return("Not Aura Level")
		}
		api.applyAuraChange(this.pId,aura)
		this.changeCoins(-cost)
	}

	sellAura (aura,cost) {
		const nowAura = api.getAuraInfo(this.pId).totalAura
		cost /= api.getAuraInfo(this.pId).auraPerLevel
		if(typeof aura === "string") {
			if(aura.includes("Lv")) {
				aura = Number(aura.replace("Lv",""))
				aura *= api.getAuraInfo(this.pId).auraPerLevel
				cost *= aura
			}
		}
		if(aura == "all") {
			aura = nowAura
			cost *= aura
		}
		if(nowAura < aura) {
			return("No Aura")
		}
		api.applyAuraChange(this.pId,-aura)
		this.changeCoins(cost)
	}
}

globalThis.bank = {}
const leaderboardSetting = {
	name: {
		displayName: "Name",
		sortPriority: 0
	},
	coins: {
		displayName: "Coins",
		sortPriority: 1
	},
	ranks: {
		displayName: "Rank",
		sortPriority: 2
	}
}

onPlayerJoin = (pId) => {
	globalThis.bank[pId] = new CoinsAndAura(pId)
	api.setClientOption(pId,"lobbyLeaderboardInfo",leaderboardSetting)
}

onPlayerLeave = (pId, shutDown) => {
	globalThis.bank[pId].save()
}

onPlayerDropItem = (pId, x, y, z, item, val, fromI) => {
	if(fromI === 86) {
		return "preventDrop"
	}
}

onPlayerMoveInvenItem = (pId, fromIdx, toStartIdx, toEndIdx, val) => {
	if(fromIdx === 86) {
		return "preventChange"
	}
}

const roles = {
	"Owner" : {
		role:{iconName:"crown",color:"#F5D142"},
		players:[
			{name:"Ryokuryusei_suisei_"}
		]
	},
	"Co-Owner" : {
		role:{iconName:"crown",color:"#E19835"},
		players:[
		]
	},
	"Coder" : {
		role:{iconName:"gear",color:"#4FEDED"},
		players:[
		]
	},
	"Builder" : {
		role:{iconName:"hammer",color:"#2EEB82"},
		players:[
		]
	},
	"Mod" : {
		role:{iconName:"shield",color:"#4FEDED"},
		players:[
		]
	}
}

onPlayerChat = (pId, msg, channel) => {
	if(channel == null) {
		const pRank = globalThis.bank[pId].getRank()
		const pName = api.getEntityName(pId)
		const pDbId = api.getPlayerDbId(pId)
		let newMsg = [{str:""}]
		for(const aRole in roles) {
			for(const pData of roles[aRole].players) {
				if(pData?.dbId === pDbId || pData?.name === pName) {
					icon = roles[aRole].role
					newMsg.push({str:"[",style:{color:icon.color}})
					newMsg.push({icon:icon.iconName,style:{color:icon.color}})
					newMsg.push({str:"] ",style:{color:icon.color}})
					
				}
			}
		}
		for(let rank of pRank.rank) {
			newMsg.push({str:`[${rank.str}] `,style:rank.style})
		}
		newMsg.push({str:`${pName}: `,style:{color:pRank.chatNameColor}})
		newMsg.push({str:msg,style:{color:pRank.chatTextColor}})
		api.broadcastMessage(newMsg)
		return("preventChat")
	}
}
