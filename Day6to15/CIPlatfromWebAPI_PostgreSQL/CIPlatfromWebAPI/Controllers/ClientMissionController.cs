﻿using Business_logic_Layer;
using Data_Access_Layer.Repository.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientMissionController : ControllerBase
    {
        private readonly BALMission _balMission;
        ResponseResult result = new ResponseResult();

        public ClientMissionController(BALMission balMission)
        {
            _balMission = balMission;
        }

        [HttpGet]
        [Route("ClientSideMissionList/{userId}")]
        public async Task<ResponseResult> ClientSideMissionList(int userId)
        {
            try
            {
                result.Data = await _balMission.ClientSideMissionList(userId);
                result.Result = ResponseStatus.Success;
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.Result = ResponseStatus.Error;
            }
            return result;
        }

        [HttpPost]
        [Route("ApplyMission")]
        public async Task<ResponseResult> ApplyMission(MissionApplication missionApplication)
        {
            try
            {
                result.Data = await _balMission.ApplyMission(missionApplication);
                result.Result = ResponseStatus.Success;
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.Result = ResponseStatus.Error;
            }
            return result;
        }
    }
}
